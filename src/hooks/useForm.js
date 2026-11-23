import { useState, useCallback } from 'react';

export const useForm = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const validateField = useCallback((name, value) => {
    const rules = validationRules[name];
    if (!rules) return null;

    if (rules.required && (!value || (typeof value === 'string' && !value.trim()))) {
      return rules.requiredMessage || `${name} is required`;
    }

    if (value && rules.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return rules.emailMessage || 'Please enter a valid email address';
    }

    if (value && rules.phone && !/^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{4,6}$/.test(value)) {
      return rules.phoneMessage || 'Please enter a valid phone number';
    }

    if (value && rules.minLength && value.length < rules.minLength) {
      return rules.minLengthMessage || `${name} must be at least ${rules.minLength} characters`;
    }

    if (value && rules.maxLength && value.length > rules.maxLength) {
      return rules.maxLengthMessage || `${name} must not exceed ${rules.maxLength} characters`;
    }

    if (value && rules.pattern && !rules.pattern.test(value)) {
      return rules.patternMessage || `${name} is not valid`;
    }

    if (rules.custom && typeof rules.custom === 'function') {
      return rules.custom(value, values);
    }

    return null;
  }, [validationRules, values]);

  const validateAll = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(name => {
      const error = validateField(name, values[name]);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [validationRules, values, validateField]);

  const handleChange = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [errors, validateField]);

  const handleBlur = useCallback((name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, values[name]);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [values, validateField]);

  const handleSubmit = useCallback((onSubmit) => {
    return async (e) => {
      if (e) e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);

      // Mark all fields as touched
      const allTouched = Object.keys(validationRules).reduce((acc, key) => ({ ...acc, [key]: true }), {});
      setTouched(allTouched);

      const isValid = validateAll();

      if (isValid) {
        try {
          await onSubmit(values);
          setSubmitStatus('success');
          // Clear form after a short delay so the success message shows
          setTimeout(() => {
            setValues(initialValues);
            setErrors({});
            setTouched({});
            setSubmitStatus(null);
            setIsSubmitting(false);
          }, 3000);
        } catch (error) {
          setSubmitStatus('error');
          setIsSubmitting(false);
          throw error;
        }
      } else {
        setSubmitStatus('error');
        setIsSubmitting(false);
      }
    };
  }, [validationRules, values, validateAll, initialValues]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setSubmitStatus(null);
    setIsSubmitting(false);
  }, [initialValues]);

  const setFieldValue = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const setFieldError = useCallback((name, error) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  }, []);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue,
    setFieldError,
    validateField,
    validateAll
  };
};

export const formatPhoneNumber = (value) => {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 11) {
    return digits;
  }
  return digits.slice(0, 11);
};

export const validateUKPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  // UK mobile: 07xxx xxxxxx or +44 7xxx xxxxxx
  // UK landline: 01xxx xxxxxx or 02x xxxx xxxx or +44 1xxx xxxxxx
  const ukMobileRegex = /^(?:(?:\+44|0)7\d{3}|\(?07\d{3}\)?)\s?\d{6}$/;
  const ukLandlineRegex = /^(?:(?:\+44|0)(?:1\d{3,4}|2\d{3,4}))\s?\d{6}$/;
  return ukMobileRegex.test(cleaned) || ukLandlineRegex.test(cleaned);
};