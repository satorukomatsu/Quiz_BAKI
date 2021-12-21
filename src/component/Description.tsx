import React from "react";
import { YouTube } from "./YouTube";

export const Description = () => {
    return (
        <div className="description">
            <div className="explain">
                <h1>グラップラー刃牙とは．．．</h1>
                <p>地下闘技場の最年少チャンピオン範馬刃牙と、刃牙の父で地上最強の生物と謳われる範馬勇次郎を中心とし、様々な格闘家との闘いが織り成す長編格闘ドラマ。</p>
                <p>通常の格闘技の試合のみならず、色々な条件下での死闘が数多く描かれており、本作の持つ「『地上最強』は誰か？『地上最強』とは何か？」のテーマに深みを持たせている。作者は本作を「闘いのテレクラだ!!」と称した。登場するほとんどの格闘家は「地上最強」を目指して闘い続けているが、主人公の刃牙だけはあくまで勇次郎を超えることのみを目標としており「地上最強」を目指してはいない</p>
                <p>ウィキペディア（Wikipedia）,「グラップラー刃牙」,https://ja.wikipedia.org/wiki/グラップラー刃牙#ゲーム作品,（2021年12月16日）</p>
            </div>
            <div　className="movie">
            <YouTube />
            </div>
        </div>
    )
}