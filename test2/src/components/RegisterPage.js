import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const users = new Set();

    const handleRegister = () => {
        if (!username || !password || !confirmPassword) {
            setErrorMessage('Пожалуйста, заполните все поля.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Пароли не совпадают.');
            return;
        }

        if (users.has(username)) {
            setErrorMessage('Пользователь уже зарегистрирован.');
            return;
        }

        users.add(username);
        setIsRegistered(true);
        setErrorMessage('');
        alert('Вы успешно зарегистрированы!');
    };

    return (
        <div>
            <h2>Форма регистрации</h2>
            <div>
                <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button onClick={handleRegister}>Зарегистрироваться</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {isRegistered && <p>Вы успешно зарегистрированы!</p>}
        </div>
    );
};

export default RegistrationForm;
