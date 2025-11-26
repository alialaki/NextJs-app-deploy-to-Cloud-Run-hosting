'use server'

const favoriteThings = [
    'Chocolate',
    'Football',
    'JavaScript',
    'Volleyball',
    'Reading',
    'Traveling',
    'Cooking',
    'Music',
];

export async function getFavoriteThings() {
    return favoriteThings;
}

export async function addFavoriteThing(newThing: string) {
    favoriteThings.push(newThing);
    return;
}