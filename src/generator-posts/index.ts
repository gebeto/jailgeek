import { CreatePostGenerator } from './PostGenerator';
import blackFont from 'url:./assets/SFUIDisplay-Black.otf';
import heavyFont from 'url:./assets/SFUIDisplay-Heavy.otf';
import archiveFont from 'url:./assets/Archive.otf';
import postBG from 'url:./assets/post-bg.png';


const post = CreatePostGenerator({
	postFontPath: blackFont,
	hashFontPath: heavyFont,
	// hashFontPath: archiveFont,
	backgroundImagePath: postBG,
	// backgroundImagePath: "./assets/test.png",

	// resultImageWrapper: document.getElementById("result-wrapper"),
	resultImage: document.getElementById("result-image") as HTMLImageElement,

	postInput: document.getElementById("post-text") as HTMLInputElement,
	hashInput: document.getElementById("post-hash") as HTMLInputElement,
	generateButton: document.getElementById("post-generate") as HTMLButtonElement,

	updateOffset: 1000,
});
