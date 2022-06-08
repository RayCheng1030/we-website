# World Entertainment

## Structure
1. 已套用 Vue 3 框架，請安裝最新 Node.js 及 Vue 相關的 node module，以便運行
    ```shell
    # 請先切換到該專案的根目錄
    npm i vue@latest -g
    npm i @vue/cli -g
    npm i
    ```

    - 可開啟 Vue CLI (`vue ui`)，以便檢視開發的網頁
    - 可安裝與 Vue 相關的 VS Code 套件，以便檢視代碼
        - Vue Language Features (Volar)
        - TypeScript Vue Plugin (Volar)
        - Vue Volar extension Pack
        - i18n Ally

2. Vue 文件
    - 資料夾位置：`src/App.vue` 與 `src/views/`，副檔名：`.vue`
    - 結構：
        ```
        src/App.vue (主頁面)
          └ src/views/sections/*.vue (主頁面分區，如 Header、Outline、News、Order、...)
              └ src/views/comps/*.vue (子元件)
        ```
    - 原始網頁的資料夾位置：`origin/`
        - 可使用如 Go Live 的 VS Code 套件檢視

3. 語系
    - 資料夾位置：`src/models/i18n/`，副檔名：`.josn`
        - 目前語系僅提供 `zht` (繁體中文)、`en` (英文)
            - 若有額外語系需求，再告知
            - 預設為 `zht`
        - 修改語系時，請務必確認 `zht.json` 的註解
            - 忽略註解，盡量保持兩份文件的文本量一致
            - `marquee.bottom` 是指出現在下方的跑馬燈，數量無上限，但至少一筆
            - `marquee.ring` 是指出現在畫廊左上角的圓環跑馬燈
    - 由於尚未說明切換語系的方式，目前僅能透過網址 query 的方式切換
        - 如：`localhost:8080/#/?lang=en`
    - 當切換語系至 `zht` 時，會自動加載字體 Noto Sans TC

4. 圖檔
    - 資料夾位置：`src/assets/images/`
        - 新聞文章對應的圖檔，位於 `src/images/articles/*.png`
            - 請配合語系的 `news.articles[i].image`
            - 文章數量無上限，但至少一筆
        - 畫廊對應的圖檔，位於 `src/images/gallery/*.jpg`
            - 數量無上限，但至少一筆
            - 當數量非預設的 6 個時，須修改 (`src/views/sections/PageOutlineGallery.vue`) 代碼 (`photos.length`)
        - Outline 背景對應的圖檔，位於 `src/images/outline/*.png`
            - 圖檔本身具有透明度
            - 由於圖檔大小、位置、數量是寫死於代碼中，若有修改需求再另行告知
        - `src/images/ray.jpg` 是滑動特效的圖檔
            - 已改成綠色，能夠正常顯示
            - 原檔放於 `origin/images/common/ray.jpg`

5. 影像檔
    - 資料夾位置：`src/assets/videos/`
        - `src/assets/videos/background.mp4` 是用於背景的影片，靜音
        - `src/assets/videos/full.mp4` 是點擊 FULL MOVIE 跳出的完整影片

6. 撰寫文章
    - 參考語系文件中的 `news.articles.href`
      - 當其開頭為非 http 協定的任意字詞時，會自動對應語系的 `news.pages` 下的相同字詞
        - 如 `href` 為 `introduce` 時，自動對應 `news.pages.introduce` 下的資料作為文章顯示
      - 文章所需的資料有四項：
        - `date`：日期文字，但可填入非日期的文字，會顯示於主標題上方
        - `title`：主標題，僅支援單行
        - `image`：對應圖像的資料夾位於 `src/assets/images/articles`
        - `content`：文章內文，支援多行 (以陣列形式表示每個段落) 與 Markdown 語法

7. 影片播放按鈕
    - 原特效參考 (https://www.elegantseagulls.com/) 是使用圖像，但考慮到有替換文字的需求，故改用 SVG
        - 語系文件中的 `button.fullMovie.text` 可替換中間的文字
            - 目前僅支援一個全形字，若有多個字的需求，需以 `button.fullMovie.textLeft` 調整 x 軸位置 (單位：px)
        - 語系文件中的 `button.fullMovie.border` 可替換外圍的文字
            - 由於 SVG 本身限制，需以 `button.fullMovie.borderSize` 調整其文字大小 (單位：px)

## References
* https://www.acsl.co.jp/drone-soten/
