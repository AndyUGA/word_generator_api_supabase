import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

serve(async (req) => {
  let nounList = [
    'Dog',
    'Cat',
    'Sun',
    'Hat',
    'Cup',
    'Ball',
    'Tree',
    'Car',
    'Book',
    'Chair',
    'House',
    'Smile',
    'Flower',
    'Bird',
    'Clock',
    'Moon',
    'Star',
    'Bridge',
    'Key',
    'Cake',
    'Fish',
    'Boat',
    'Butterfly',
    'Ice cream',
    'Door',
    'Lamp',
    'Apple',
    'Duck',
    'Sunflower',
    'Guitar',
    'Banana',
    'Cloud',
    'Rainbow',
    'Pencil',
    'Rain',
    'Sunglasses',
    'Leaf',
    'Snail',
    'Rocket',
    'Wheel',
    'Flag',
    'Ghost',
    'Spider',
    'Ant',
    'Feather',
    'Shoe',
    'Grass',
    'Egg',
    'Arrow',
    'Turtle',
    'Houseplant',
    'Piano',
    'Moonlight',
    'Spiderweb',
    'Bee',
    'Telephone',
    'Toothbrush',
    'Camera',
    'Teapot',
    'T-shirt',
    'Ladybug',
    'Whale',
    'Pizza',
    'Starfish',
    'Tooth',
    'Train',
    'Doorbell',
    'Ice cube',
    'Suitcase',
    'Ladder',
    'Envelope',
    'Bread',
    'Socks',
    'Pineapple',
    'Carrot',
    'Table',
    'Boomerang',
    'Clock',
    'Scissors',
    'Fan',
    'Candle',
    'Sunset',
    'Map',
    'Mailbox',
    'Bathtub',
    'Toilet',
    'Computer',
    'Snorkel',
    'Microphone',
    'Spoon',
    'Globe',
    'Snowflake',
    'Mouth',
    'Bed',
    'Dog',
    'Cat',
    'Tree',
  ];
  let randomInt = Math.floor(Math.random() * nounList.length);
  const data = {
    randomWord: `${nounList[randomInt]}`,
  };

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
});

// supabase functions deploy word_generator_api --project-ref ovlhvogwndcqxaskukrv
