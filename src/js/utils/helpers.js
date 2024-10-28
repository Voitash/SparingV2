export const getSelectedValue = (name) => {
    return parseInt(document.querySelector(`input[name="${name}"]:checked`).value);
};

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export const formatWeight = (weight) => {
    return Number.isInteger(weight) ? weight.toString() : weight.toFixed(1);
};

