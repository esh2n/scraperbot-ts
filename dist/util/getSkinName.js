"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkinName = void 0;
exports.getSkinName = () => {
    const skins = [
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
    const num = Math.floor(Math.random() * skins.length);
    return skins[num];
};
