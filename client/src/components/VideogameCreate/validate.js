export default function validate(input) {
    let errors = {};
    if (!input.name.trim()) {
        errors.name = 'Write a name, please';
    }
    if (!input.description.trim()) {
        errors.description = 'Write a description, please';
    }
    if (!input.platforms.length) {
        errors.platforms = 'Select a platform, please';
    }
    return errors;
}
