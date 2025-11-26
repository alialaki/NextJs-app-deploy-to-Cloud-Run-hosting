'use client';
import { useEffect, useState } from 'react';
import { getFavoriteThings, addFavoriteThing } from './server';

export default function Home() {
  const [newFavoriteThing, setNewFavoriteThing] = useState('');
  const [favoriteThings, setFavoriteThingsList] = useState<string[]>([]);
  async function getThings() {
    const updatedListOfThings = await getFavoriteThings();
    setFavoriteThingsList(updatedListOfThings);
  }
  useEffect(() => {
    getThings();
  }, []);

  async function addThing() {
    await addFavoriteThing(newFavoriteThing);
    setNewFavoriteThing('');
    await getThings();
  }
  
  return ( 
      <main >
        <h1> Hello Alex!</h1>
        <h2>My Favorite Things</h2>
        <input 
          placeholder="Add favorite things"
          value={newFavoriteThing}
          onChange={(e) => setNewFavoriteThing(e.target.value)}

        />
        <button onClick={addThing}>
          Add New Favorite Thing
        </button>
        <ul>
          {favoriteThings.map((thing, index) => (
            <li key={index}>{thing}</li>
          ))}
        </ul>
      </main>
  
  );
}
