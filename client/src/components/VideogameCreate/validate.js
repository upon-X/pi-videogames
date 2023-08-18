export default function validate(input) {
    let errors = {};
    // Name
    if (!input.name.trim()) {
        errors.name = 'Write a name (2-30 characters)';
    }
    // Description
    if (input.description <= 0) {
        errors.description = 'Write a description (max 500 characters)';
    }
    // Platforms
    if (!input.platforms.length) {
        errors.platforms = 'Select a platform';
    }
    // Rating
    if (!input.rating.length) {
        errors.rating = 'Put rating';
    } else if (!/^[0-9]+$/.test(input.rating)) {
        errors.rating = 'Rating must be an integer';
    } else if (input.rating < 0 || input.rating > 5) {
        errors.rating = 'Rating must be between 0 and 5';
    }
    // Released
    if (!input.released) {
        errors.released = 'Select a date';
    } else if (input.released < '1958-10-01') {
        errors.released = 'Date must be higher 1/10/1958';
    }
    return errors;
}