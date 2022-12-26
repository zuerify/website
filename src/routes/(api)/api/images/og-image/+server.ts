import type { RequestHandler } from '../../(api)/api/$types';
import { ImageResponse } from '@ethercorps/sveltekit-og';
import { dev } from '$app/environment';

const outfitFont = await fetch(
	'https://cdn.jsdelivr.net/npm/@fontsource/outfit/files/outfit-latin-400-normal.woff'
);
const outfitFontData: ArrayBuffer = await outfitFont.arrayBuffer();

const acehFont = await fetch(
	dev
		? 'http://localhost:5173/font/Aceh-ExtraBold.otf'
		: 'https://dev.zuerify.com/font/Aceh-ExtraBold.otf'
);
const acehFontData: ArrayBuffer = await acehFont.arrayBuffer();

const height = 630;
const width = 1200;

const template = `
 <div style="font-family: 'Outfit';" tw="flex w-full h-full">
    <div tw="flex w-full h-full">

	 <div tw="flex flex-col w-full h-full justify-center pl-5 -mt-4">
	 	<h1 style="font-family: 'Aceh';" tw="text-8xl text-slate-900 tracking-tight font-bold  -mb-3">zuerify</h1>
		<h3 tw="text-2xl uppercase font-bold tracking-tight text-slate-900">Online Presence, One click away</h3> 
	  </div>

      <div style="background: linear-gradient(to bottom right, transparent 0%, transparent 50%, #268bcc 50%, #268bcc 100%);" tw="flex absolute left-0 top-0 w-full h-full"></div>
    </div>
  </div>
`;

export const GET: RequestHandler = async ({ setHeaders }) => {
	return ImageResponse(template as string, {
		height,
		width,
		fonts: [
			{ data: outfitFontData, name: 'Outfit', weight: 400, style: 'normal' },
			{ data: acehFontData, name: 'Aceh', weight: 800, style: 'normal' }
		]
	});
};
