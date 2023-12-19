function authenticateUser(username, password) {
    const users = [
        { user: 'Apostol', pass: 'Kupenov' },
    ];

    return users.some(user => user.user === username && user.pass === password);
}
