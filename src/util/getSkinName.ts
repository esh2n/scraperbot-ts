export const getSkinName = (): string => {
	const skins: string[] = [
		'プールパーティー',
		'プロジェクト',
		'チャレンジャー',
		'覇者',
		'ヘクステック',
		'コマンドー',
		'荒野の',
		'これじゃない',
		'勝利の栄光'
	];
	const num = Math.floor( Math.random() * skins.length);
	return skins[num];
};

export const getSunfishAA = (): string[] => {
	const sunfishs: string[][] = [
	[
		'.　　　　　　　　　　　　/^i',
		'.　　　　　　　　　　　  /:::::|',
		'.　　　　　　　　　 ＿＿/::::::::|',
		'.　 　 　 　 ,. ‐’ ´::::::::::::::::::::::::::ヽ:.､',
		'.　　　, ‐’´:::::::::::::::::::::::::::::::::::::::::::ヽ:＼',
		'.　　（:::(ｏ):::::::／i:::::::::::::::::::::::::::::::::i::::::i',
		'.　　 ヽ　　　　￣ :::::::::::::::::::::::::::::|::::::l',
		'.　　　 ＼　　　　　   ::::::::::::::::::ｉ::::::i',
		'.　　　　　`‐ ､　　　　　　 ::::::/::／',
		'.　　　 　 　 　 ｀ ー– ､…….::／ ‘´',
		'.　　　　　　　　 　 　i:::::::|',
		'.　 　 　 　 　 　 　 　  i:::::::!',
		'.　　　　　　　　　　　ヽ:_|'
	],
	];
	const num = Math.floor( Math.random() * sunfishs.length);
	return sunfishs[num];
};
