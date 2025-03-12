import { Router, type Request, type Response } from 'express';
import WeatherService from '../../service/weatherService.js';
import HistoryService from '../../service/historyService.js';

const router = Router();


// import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
  const { cityName } = req.body;
  if (typeof cityName === 'string') {
    const weatherData = await WeatherService.getWeatherForCity(cityName);
    res.json(weatherData);
  } else {
    res.status(400).send('Invalid city name');
  }


  // TODO: GET weather data from city name
  //res.send('POST request to the weather route');
});

router.get('/city', async (req: Request, res: Response) => {


  // TODO: save city to search history
});

// TODO: GET search history
router.get('/history', async (req: Request, res: Response) => {});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
