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
