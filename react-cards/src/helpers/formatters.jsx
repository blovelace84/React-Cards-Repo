// src/helpers/formatters.js

export function formatPlayingCard(data) {
    return {
      id: data.code, // Ensure 'code' exists in API response
      image: data.image, // Ensure 'image' exists in API response
    };
  }
  
  export function formatPokemon(data) {
    return {
      id: data.id,
      name: data.name,
      front: data.sprites?.front_default || "",
      back: data.sprites?.back_default || "",
      stats: data.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })),
    };
  }
  