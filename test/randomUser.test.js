import { test,expect } from 'vitest';
import { fetchRandomUser } from '../src/randomUser';

test('Test de fetchRandomUser', async () => {
    // Attendre la résolution de la promesse retournée par fetchRandomUser
    const userData = await fetchRandomUser();

    // Vérifier si les données renvoyées correspondent aux détails attendus de l'utilisateur
    /*const expectedDetails = {
        gender: expect.any(String),
        name: expect.objectContaining({
            title: expect.any(String),
            first: expect.any(String),
            last: expect.any(String)
        }),
        location: expect.objectContaining({
            street: expect.objectContaining({
                number: expect.any(Number),
                name: expect.any(String)
            }),
            city: expect.any(String),
            state: expect.any(String),
            country: expect.any(String),
            postcode: expect.any(Number),
            coordinates: expect.objectContaining({
                latitude: expect.any(String),
                longitude: expect.any(String)
            }),
            timezone: expect.objectContaining({
                offset: expect.any(String),
                description: expect.any(String)
            })
        }),
        email: expect.any(String),
        login: expect.objectContaining({
            uuid: expect.any(String),
            username: expect.any(String),
            password: expect.any(String),
            salt: expect.any(String),
            md5: expect.any(String),
            sha1: expect.any(String),
            sha256: expect.any(String)
        }),
        dob: expect.objectContaining({
            date: expect.any(String),
            age: expect.any(Number)
        }),
        registered: expect.objectContaining({
            date: expect.any(String),
            age: expect.any(Number)
        }),
        phone: expect.any(String),
        cell: expect.any(String),
        id: expect.objectContaining({
            name: expect.any(String),
            value: expect.anything()
        }),
        picture: expect.objectContaining({
            large: expect.any(String),
            medium: expect.any(String),
            thumbnail: expect.any(String)
        }),
        nat: expect.any(String)
    };
    expect(typeof userData).toBe('object');
    expect(userData).toMatchObject(expectedDetails);*/
    const expectedProperties = [
        'gender', 'name', 'location', 'email', 'login', 'dob', 'registered', 'phone', 'cell', 'id', 'picture', 'nat'
    ];

    // Vérifier que chaque propriété attendue existe dans les données de l'utilisateur
    for (const prop of expectedProperties) {
        expect(userData).toHaveProperty(prop);
    }
});

