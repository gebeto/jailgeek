import html2canvas from 'html2canvas';
import { injectFonts, injectStyles } from '../core/Injectors';
import { Offsetable } from '../core/Offsetable';
import styles from './styles.css';


export interface CreatePostGeneratorProps {
	postFontPath: string,
	hashFontPath: string,
	backgroundImagePath: string,

	resultImage: HTMLImageElement;

	updateOffset?: number;
}


export function CreatePostGenerator(props: CreatePostGeneratorProps) {
	const components: any = {
		resultImage: null,
	};

	function generateText(text: string) {
		let result = text
			.replace(/\*(.+?)\*/gi, '<span class="blue">$1</span>')
			.replace(/\n/g, "<br />")
		return result;
	}


	injectFonts([{
		family: "SF Display Heavy",
		url: props.postFontPath,
	}, {
		family: "SF Display Bold",
		url: props.hashFontPath,
	}]);


	// WRAPPER
	const contentWrapper = document.createElement("div")!;
	contentWrapper.className = "post__content-wrapper";
	// document.body.appendChild(contentWrapper);

	const content = document.createElement("div")
	content.className = "post__content";

	// BG
	const img = document.createElement("img");
	img.width = 1500;
	img.src = props.backgroundImagePath;

	const tag = document.createElement("span");
	tag.className = "post__tag";
	tag.textContent = "";

	const text = document.createElement("span");
	text.className = "post__text";
	text.innerHTML = "";

	content.appendChild(img);
	content.appendChild(tag);
	content.appendChild(text);
	contentWrapper.appendChild(content);

	injectStyles(styles);

	const offsetableUpdateCanvas = new Offsetable(props.updateOffset || 1000, function() {
		const converter = html2canvas(content);
		converter.then(function(canvas) {
			if (components.resultImage) {
				components.resultImage.src = canvas.toDataURL();
			}
		});
	});

	function getEventType(element: HTMLElement) {
		let result = "input"
		if (["select"].indexOf(element.tagName) > -1) {
			result = "change";
		}
		return result;
	}

	// offsetableUpdateCanvas.withoutOffset();

	return {
		setImgRef(img: HTMLImageElement) {
			components.resultImage = img;
			offsetableUpdateCanvas.withoutOffset();
		},

		setTag(hashStr: string) {
			tag.innerHTML = generateText(hashStr);
			offsetableUpdateCanvas.withOffset();
		},

		setText(textStr: string) {
			text.innerHTML = generateText(textStr);
			offsetableUpdateCanvas.withOffset();
		},

		generate() {
			offsetableUpdateCanvas.withoutOffset();
		},

		mount() {
			document.body.appendChild(contentWrapper);
			setTimeout(() => {
				offsetableUpdateCanvas.withoutOffset();
			}, 10);
		},

		unmount() {
			document.body.removeChild(contentWrapper);
		}
	};
}

(window as any).CreatePostGenerator = CreatePostGenerator;