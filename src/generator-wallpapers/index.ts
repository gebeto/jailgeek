import { CreateWallpapersGenerator } from './WallpapersGenerator';


import w1 from "url:./assets/w_1.png";
import w2 from "url:./assets/w_2.png";
import w3 from "url:./assets/w_3.png";
import w4 from "url:./assets/w_4.png";
import w5 from "url:./assets/w_5.png";


CreateWallpapersGenerator({
	w1_Input: document.getElementById("wallpaper-1") as HTMLInputElement,
	w2_Input: document.getElementById("wallpaper-2") as HTMLInputElement,
	w3_Input: document.getElementById("wallpaper-3") as HTMLInputElement,
	w4_Input: document.getElementById("wallpaper-4") as HTMLInputElement,
	w5_Input: document.getElementById("wallpaper-5") as HTMLInputElement,

	w1, w2, w3, w4, w5,

	resultImage: document.getElementById("result-image") as HTMLImageElement,
});