<template>
    <!-- <nav> -->
        <!-- <router-link to="/">Home</router-link> | -->
        <!-- <router-link to="/about">About</router-link> -->
    <!-- </nav> -->
    <!-- <router-view/> -->

    <div class="cBase" data-menu-hidden data-transition-hidden>
        <div data-scroll-container>
            <div data-router-wrapper>
                <div data-router-view="pIndex">
                    <main class="cMain">
                    <a class="lHero" data-el data-scroll data-scroll-sticky data-scroll-target=".cMain">
                        <div class="lHero-title">
                        <div class="lHero-titleInner" data-ref>
                            <h1 class="lHero-titleMain" data-ref>
                                <span class="lHero-titleEn" data-ref aria-hidden="true">
                                    <span class="lHero-titleWord">MOVING&nbsp;</span>
                                    <span class="lHero-titleWord">SOCIETY&nbsp;</span>
                                    <span class="lHero-titleWord">FORWARD</span>
                                </span>
                                <span class="lHero-titleEn -flicker" data-ref="titleEnFlicker">MOVING SOCIETY FORWARD</span>
                                <span class="lHero-titleJp" data-ref>未来を支えるセキュアな国産ドローン</span>
                            </h1>
                            <p class="lHero-logo" data-ref>
                                <span>
                                    <svg class="lHero-logo-img" role="img" fill="currentColor" width="150" height="100" aria-label="蒼天 - SOTEN">
                                        <use xlink:href="images/common/svg-symbols.svg#svg-soten_logo"></use>
                                    </svg>
                                </span>
                            </p>
                        </div>
                        </div>
                        <p class="cMarquee lHero-marquee" aria-label="DEC 2021 RELEASE" data-ref>
                            <span class="cMarquee-line" data-ref>
                                <span class="cMarquee-text" data-ref>DEC 2021 RELEASE</span>
                            </span>
                        </p>
                        <video class="lHero-video" src="https://www.acsl.co.jp/assets-movingsocietyforward/assets/videos/hero.mp4" muted loop playsinline autoplay data-ref></video>
                        <div class="lHeroMouseStalker" data-el="cMouseStalker">
                        <div class="lHeroMouseStalker-text" data-ref="cMouseStalker-text">FULL MOVIE</div>
                        <div class="lHeroMouseStalker-shape -normal" data-ref="cMouseStalker-shapeNormal">
                            <div class="lHeroMouseStalker-side -left"></div>
                            <div class="lHeroMouseStalker-side -top"></div>
                            <div class="lHeroMouseStalker-side -bottom"></div>
                        </div>
                        <div class="lHeroMouseStalker-shape -accent" data-ref="cMouseStalker-shapeAccent">
                            <div class="lHeroMouseStalker-side -left"></div>
                            <div class="lHeroMouseStalker-side -top"></div>
                            <div class="lHeroMouseStalker-side -bottom"></div>
                        </div>
                        <div class="lHeroMouseStalker-shape -theme" data-ref="cMouseStalker-shapeTheme">
                            <div class="lHeroMouseStalker-side -left"></div>
                            <div class="lHeroMouseStalker-side -top"></div>
                            <div class="lHeroMouseStalker-side -bottom"></div>
                        </div>
                        </div>
                    </a>
                    <section class="lOutline" id="outline" data-el data-scroll data-scroll-call="lOutline">
                        <h2 class="cTitle -right lOutline-title" data-el="cTitle" data-scroll data-scroll-call="lOutline-title" data-ref data-scroll-offset="10%">
                            <span class="cTitle-line -top"></span>
                            <span class="cTitle-line -bottom"></span>
                            OUTLINE
                        </h2>
                        <p class="lOutline-catchEn" data-el data-scroll data-scroll-call="lOutline-catchEn">THE POWER TO <br>ADVANCE JAPAN’S <br>INFRASTRUCTURE</p>
                        <picture>
                            <source srcset="images/index/sp/1x/bgimg_main.png.webp 1x,images/index/sp/2x/bgimg_main@2x.png.webp 2x" type="image/webp" media="(max-width: 767px)">
                            <source srcset="images/index/pc/1x/bgimg_main.png.webp 1x,images/index/pc/2x/bgimg_main@2x.png.webp 2x" type="image/webp">
                            <source srcset="images/index/sp/1x/bgimg_main.png 1x,images/index/sp/2x/bgimg_main@2x.png 2x" media="(max-width: 767px)">
                            <img class="lOutline-image" data-ref data-scroll data-scroll-speed="-3" data-scroll-speed-native src="images/index/pc/1x/bgimg_main.png" width="1480" height="1480" alt="" loading="lazy" srcset="images/index/pc/1x/bgimg_main.png 1x,images/index/pc/2x/bgimg_main@2x.png 2x">
                        </picture>
                        <p class="lOutline-catchJp -pc" data-ref data-scroll data-scroll-call="lOutline-catchJp">
                            <span class="lOutline-catchJp-line -top"></span>
                            <span class="lOutline-catchJp-line -bottom"></span>
                            日本の社会インフラを進化させる力。
                        </p>
                        <p class="lOutline-catchJp -spLineBefore -sp" data-ref data-scroll data-scroll-call="lOutline-catchJp.-spLineBefore">
                            <span class="lOutline-catchJp-line -top"></span>
                            <span class="lOutline-catchJp-line -bottom"></span>
                            日本の社会インフラを
                        </p>
                        <p class="lOutline-catchJp -spLineAfter -sp" data-ref data-scroll data-scroll-call="lOutline-catchJp.-spLineAfter">
                            <span class="lOutline-catchJp-line -top"></span>
                            <span class="lOutline-catchJp-line -bottom"></span>
                            進化させる力。
                        </p>
                        <div class="lOutline-text" data-el data-scroll data-scroll-call="lOutline-text-p">
                            <p class="lOutline-text-p">
                                <span>社会インフラを支えるすべての人へ</span><br>
                                <span>より良い未来をつくるために届けたい</span><br>
                                <span>空をより近くに、空間を自在にする「目」</span>
                            </p>
                            <p class="lOutline-text-p">
                                <span>ひとが働きがいを持って経済成長を実現するために、</span><br>
                                <span>寄り添いながら支えられる存在であるよう</span><br>
                                <span>願いながら創りあげてきました。</span><br>
                                <span>ドローンはみなさまの業務に安全と効率化をもたらし</span><br>
                                <span class="lOutline-text-pc">未来をより良くするための時間を与えてくれるパートナーです。</span>
                                <span class="lOutline-text-sp">未来をより良くするための</span><br class="_sp">
                                <span class="lOutline-text-sp">時間を与えてくれるパートナーです。</span>
                            </p>
                            <p class="lOutline-text-p">
                                <span>制御・ボディ・通信・カメラ・プロペラ・セキュリティ、</span><br>
                                <span class="lOutline-text-pc">あらゆるテクノロジーを結集し、最適化した国産ドローン。</span>
                                <span class="lOutline-text-sp">あらゆるテクノロジーを結集し、</span><br class="_sp">
                                <span class="lOutline-text-sp">最適化した国産ドローン。</span><br>
                                <span>皆様の新たなパートナーが誕生します。</span>
                            </p>
                        </div>
                        <picture>
                            <source srcset="images/index/sp/1x/bgimg_01.png.webp 1x,images/index/sp/2x/bgimg_01@2x.png.webp 2x" type="image/webp" media="(max-width: 767px)">
                            <source srcset="images/index/pc/1x/bgimg_01.png.webp 1x,images/index/pc/2x/bgimg_01@2x.png.webp 2x" type="image/webp">
                            <source srcset="images/index/sp/1x/bgimg_01.png 1x,images/index/sp/2x/bgimg_01@2x.png 2x" media="(max-width: 767px)">
                            <img class="lOutline-bgPhoto -n1" data-scroll data-scroll-speed="5" data-scroll-speed-native="5" data-el src="images/index/pc/1x/bgimg_01.png" width="500" height="680" alt="" loading="lazy" srcset="images/index/pc/1x/bgimg_01.png 1x,images/index/pc/2x/bgimg_01@2x.png 2x">
                        </picture>
                        <picture>
                            <source srcset="images/index/sp/1x/bgimg_02.png.webp 1x,images/index/sp/2x/bgimg_02@2x.png.webp 2x" type="image/webp" media="(max-width: 767px)">
                            <source srcset="images/index/pc/1x/bgimg_02.png.webp 1x,images/index/pc/2x/bgimg_02@2x.png.webp 2x" type="image/webp">
                            <source srcset="images/index/sp/1x/bgimg_02.png 1x,images/index/sp/2x/bgimg_02@2x.png 2x" media="(max-width: 767px)">
                            <img class="lOutline-bgPhoto -n2" data-scroll data-scroll-speed="4" data-scroll-speed-native="4" data-el src="images/index/pc/1x/bgimg_02.png" width="400" height="294" alt="" loading="lazy" srcset="images/index/pc/1x/bgimg_02.png 1x,images/index/pc/2x/bgimg_02@2x.png 2x">
                        </picture>
                        <picture>
                            <source srcset="images/index/sp/1x/bgimg_03.png.webp 1x,images/index/sp/2x/bgimg_03@2x.png.webp 2x" type="image/webp" media="(max-width: 767px)">
                            <source srcset="images/index/pc/1x/bgimg_03.png.webp 1x,images/index/pc/2x/bgimg_03@2x.png.webp 2x" type="image/webp">
                            <source srcset="images/index/sp/1x/bgimg_03.png 1x,images/index/sp/2x/bgimg_03@2x.png 2x" media="(max-width: 767px)">
                            <img class="lOutline-bgPhoto -n3" data-scroll data-scroll-speed="3" data-scroll-speed-native="3" data-el src="images/index/pc/1x/bgimg_03.png" width="700" height="513" alt="" loading="lazy" srcset="images/index/pc/1x/bgimg_03.png 1x,images/index/pc/2x/bgimg_03@2x.png 2x">
                        </picture>
                        <picture>
                            <source srcset="images/index/sp/1x/bgimg_04.png.webp 1x,images/index/sp/2x/bgimg_04@2x.png.webp 2x" type="image/webp" media="(max-width: 767px)">
                            <source srcset="images/index/pc/1x/bgimg_04.png.webp 1x,images/index/pc/2x/bgimg_04@2x.png.webp 2x" type="image/webp">
                            <source srcset="images/index/sp/1x/bgimg_04.png 1x,images/index/sp/2x/bgimg_04@2x.png 2x" media="(max-width: 767px)">
                            <img class="lOutline-bgPhoto -n4" data-scroll data-scroll-speed="1" data-scroll-speed-native="1" data-el src="images/index/pc/1x/bgimg_04.png" width="500" height="680" alt="" loading="lazy" srcset="images/index/pc/1x/bgimg_04.png 1x,images/index/pc/2x/bgimg_04@2x.png 2x">
                        </picture>
                        <picture>
                            <source srcset="images/index/sp/1x/bgimg_05.png.webp 1x,images/index/sp/2x/bgimg_05@2x.png.webp 2x" type="image/webp" media="(max-width: 767px)">
                            <source srcset="images/index/pc/1x/bgimg_05.png.webp 1x,images/index/pc/2x/bgimg_05@2x.png.webp 2x" type="image/webp">
                            <source srcset="images/index/sp/1x/bgimg_05.png 1x,images/index/sp/2x/bgimg_05@2x.png 2x" media="(max-width: 767px)">
                            <img class="lOutline-bgPhoto -n5" data-scroll data-scroll-speed="3" data-scroll-speed-native="3" data-el src="images/index/pc/1x/bgimg_05.png" width="300" height="407" alt="" loading="lazy" srcset="images/index/pc/1x/bgimg_05.png 1x,images/index/pc/2x/bgimg_05@2x.png 2x">
                        </picture>
                    </section>
                    <div class="lOutlineGallery" data-el data-scroll data-scroll-id="lOutlineGallery" data-scroll-call="lOutlineGallery" data-scroll-repeat>
                        <div class="lOutlineGallery-target" data-ref data-scroll data-scroll-call="lOutlineGallery-inner" data-scroll-offset="80%,80%" data-scroll-repeat>
                        <div class="lOutlineGallery-wrapper" data-scroll data-scroll-sticky data-scroll-target=".lOutlineGallery-target" data-sticky>
                            <ul class="lOutlineGallery-list" data-ref>
                            <li class="lOutlineGallery-item">
                                <picture>
                                    <source srcset="images/index/sp/1x/pro_01.jpg 1x,images/index/sp/2x/pro_01@2x.jpg 2x" media="(max-width: 767px)">
                                    <img class="lOutlineGallery-image" data-el src="images/index/pc/1x/pro_01.jpg" width="1000" height="660" alt="" loading="lazy" srcset="images/index/pc/1x/pro_01.jpg 1x,images/index/pc/2x/pro_01@2x.jpg 2x">
                                </picture>
                            </li>
                            <li class="lOutlineGallery-item">
                                <picture>
                                    <source srcset="images/index/sp/1x/pro_02.jpg 1x,images/index/sp/2x/pro_02@2x.jpg 2x" media="(max-width: 767px)">
                                    <img class="lOutlineGallery-image" data-el src="images/index/pc/1x/pro_02.jpg" width="1000" height="660" alt="" loading="lazy" srcset="images/index/pc/1x/pro_02.jpg 1x,images/index/pc/2x/pro_02@2x.jpg 2x">
                                </picture>
                            </li>
                            <li class="lOutlineGallery-item">
                                <picture>
                                    <source srcset="images/index/sp/1x/pro_03.jpg 1x,images/index/sp/2x/pro_03@2x.jpg 2x" media="(max-width: 767px)">
                                    <img class="lOutlineGallery-image" data-el src="images/index/pc/1x/pro_03.jpg" width="1000" height="660" alt="" loading="lazy" srcset="images/index/pc/1x/pro_03.jpg 1x,images/index/pc/2x/pro_03@2x.jpg 2x">
                                </picture>
                            </li>
                            <li class="lOutlineGallery-item">
                                <picture>
                                    <source srcset="images/index/sp/1x/pro_04.jpg 1x,images/index/sp/2x/pro_04@2x.jpg 2x" media="(max-width: 767px)">
                                    <img class="lOutlineGallery-image" data-el src="images/index/pc/1x/pro_04.jpg" width="1000" height="660" alt="" loading="lazy" srcset="images/index/pc/1x/pro_04.jpg 1x,images/index/pc/2x/pro_04@2x.jpg 2x">
                                </picture>
                            </li>
                            <li class="lOutlineGallery-item">
                                <picture>
                                    <source srcset="images/index/sp/1x/pro_05.jpg 1x,images/index/sp/2x/pro_05@2x.jpg 2x" media="(max-width: 767px)">
                                    <img class="lOutlineGallery-image" data-el src="images/index/pc/1x/pro_05.jpg" width="1000" height="660" alt="" loading="lazy" srcset="images/index/pc/1x/pro_05.jpg 1x,images/index/pc/2x/pro_05@2x.jpg 2x">
                                </picture>
                            </li>
                            <li class="lOutlineGallery-item">
                                <picture>
                                    <source srcset="images/index/sp/1x/pro_06.jpg 1x,images/index/sp/2x/pro_06@2x.jpg 2x" media="(max-width: 767px)">
                                    <img class="lOutlineGallery-image" data-el src="images/index/pc/1x/pro_06.jpg" width="1000" height="660" alt="" loading="lazy" srcset="images/index/pc/1x/pro_06.jpg 1x,images/index/pc/2x/pro_06@2x.jpg 2x">
                                </picture>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <section class="lNews" id="news">
                        <h2 class="cTitle lNews-title" data-el="cTitle" data-scroll data-scroll-call="cTitle">
                            <span class="cTitle-line -top"></span>
                            <span class="cTitle-line -bottom"></span>
                            NEWS
                        </h2>
                        <div class="lNews-accordion" data-accordion>
                        <div class="lNews-group lNewsStalker" data-el>
                            <div class="cNews" data-news>
                                <a class="cNews-link" href="https://www.acsl.co.jp/drone-soten/news/2089">
                                <div class="cNews-day">
                                    <p class="cNews-day-month">DEC. 7</p>
                                    <p class="cNews-day-year">2021</p>
                                </div>
                                <div class="cNews-article">
                                    <p class="cNews-article-text">セキュアな小型空撮ドローン「SOTEN（蒼天）」の受注を開始</p>
                                    <div class="cNews-article-image" data-news-image>
                                        <img width="2000" height="1125" src="images/12/画像1.png" class="cNews-article-img wp-post-image" alt="" loading="lazy" srcset="images/12/画像1.png 2000w, images/12/画像1-300x169.png 300w, images/12/画像1-1024x576.png 1024w, images/12/画像1-768x432.png 768w, images/12/画像1-1536x864.png 1536w" sizes="(max-width: 2000px) 100vw, 2000px" />
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div class="cNews" data-news>
                                <a class="cNews-link" href="https://www.acsl.co.jp/drone-soten/news/2019/">
                                <div class="cNews-day">
                                    <p class="cNews-day-month">NOV. 8</p>
                                    <p class="cNews-day-year">2021</p>
                                </div>
                                <div class="cNews-article">
                                    <p class="cNews-article-text">BBC WORLD NEWSにて放送された動画をＡＣＳＬ公式YouTubeにて公開</p>
                                    <div class="cNews-article-image" data-news-image>
                                        <img width="629" height="356" src="images/11/Japan’s-leading-drone-manufacturer-ACSL-to-market-a-new-aerial-drone-1.png" class="cNews-article-img wp-post-image" alt="" loading="lazy" srcset="images/11/Japan’s-leading-drone-manufacturer-ACSL-to-market-a-new-aerial-drone-1.png 629w, images/11/Japan’s-leading-drone-manufacturer-ACSL-to-market-a-new-aerial-drone-1-300x170.png 300w" sizes="(max-width: 629px) 100vw, 629px" />
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div class="cNews" data-news>
                                <a class="cNews-link" href="https://www.acsl.co.jp/drone-soten/news/2007/">
                                <div class="cNews-day">
                                    <p class="cNews-day-month">NOV. 1</p>
                                    <p class="cNews-day-year">2021</p>
                                </div>
                                <div class="cNews-article">
                                    <p class="cNews-article-text">「未来を支えるセキュアな国産ドローン」ティザーサイト公開 2021年12月にいよいよ販売開始</p>
                                    <div class="cNews-article-image" data-news-image>
                                        <img width="1000" height="650" src="images/11/news_img.jpg" class="cNews-article-img wp-post-image" alt="" loading="lazy" srcset="images/11/news_img.jpg 1000w, images/11/news_img-300x195.jpg 300w, images/11/news_img-768x499.jpg 768w" sizes="(max-width: 1000px) 100vw, 1000px" />
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div class="lNewsMouseStalker" data-el>
                            <div class="lNewsMouseStalker-text" data-ref>MORE</div>
                            <div class="lNewsMouseStalker-shapeNormal -shape -normal" data-ref>
                                <div class="lNewsMouseStalker-circle"></div>
                            </div>
                            <div class="lNewsMouseStalker-shapeAccent -shape -accent" data-ref>
                                <div class="lNewsMouseStalker-circle"></div>
                            </div>
                            <div class="lNewsMouseStalker-shapeTheme -shape -theme" data-ref>
                                <div class="lNewsMouseStalker-circle"></div>
                            </div>
                            </div>
                        </div>
                        <div class="lNews-accordionMore" data-accordion-trigger>
                            <div class="lNews-accordionMore-text">LOAD MORE</div>
                            <div class="lNews-accordionMore-iconWrap">
                                <div class="lNews-accordionMore-icon"></div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <div class="lOrder" id="order" data-el>
                        <h2 class="cTitle -right lOrder-title" data-el="cTitle" data-scroll data-scroll-call="cTitle">
                            <span class="cTitle-line -top"></span>
                            <span class="cTitle-line -bottom"></span>
                            ORDER
                        </h2>
                        <p class="lOrder-catch" data-ref data-scroll data-scroll-call="lOrder-catch">
                            <span>DEC 2021</span><br>
                            <span>RELEASE</span>
                        </p>
                        <div class="lOrder-purchase">
                            <p class="lOrder-purchase-text">お見積もりや購入に関するご相談は<br class="_sp">販売代理店に直接お問い合わせください。</p>
                            <div class="lOrder-purchase-action">
                                <a class="lOrder-contact-link" href="https://product.acsl.co.jp/flow/" target="_blank" rel="noopener noreferrer">
                                <div class="lOrder-contact-link-font">PURCHASE FLOW</div>
                                <div class="lOrder-contact-link-arrow">
                                    <div class="lOrder-contact-link-arrow-wrap">
                                        <img class="lOrder-contact-link-arrow-img01" src="images/common/c-footer_arrow_diagonal.svg" width="21" height="21" alt="" loading="lazy" srcset="images/common/c-footer_arrow_diagonal.svg 1x,images/common/c-footer_arrow_diagonal.svg 2x">
                                        <img class="lOrder-contact-link-arrow-img02 -pcOnly" src="images/common/c-footer_arrow_diagonal.svg" width="21" height="21" alt="" loading="lazy" srcset="images/common/c-footer_arrow_diagonal.svg 1x,images/common/c-footer_arrow_diagonal.svg 2x">
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div class="lOrder-contact">
                            <a class="lOrder-contact-link" href="https://product.acsl.co.jp/product/post-369/" target="_blank" rel="noopener noreferrer">
                                <div class="lOrder-contact-link-font">PRODUCT DETAIL</div>
                                <div class="lOrder-contact-link-arrow">
                                    <div class="lOrder-contact-link-arrow-wrap">
                                        <img class="lOrder-contact-link-arrow-img01" src="images/common/c-footer_arrow_diagonal.svg" width="21" height="21" alt="" loading="lazy" srcset="images/common/c-footer_arrow_diagonal.svg 1x,images/common/c-footer_arrow_diagonal.svg 2x">
                                        <img class="lOrder-contact-link-arrow-img02 -pcOnly" src="images/common/c-footer_arrow_diagonal.svg" width="21" height="21" alt="" loading="lazy" srcset="images/common/c-footer_arrow_diagonal.svg 1x,images/common/c-footer_arrow_diagonal.svg 2x">
                                    </div>
                                </div>
                            </a>
                            <a class="lOrder-contact-link" href="https://www.acsl.co.jp/contact/" target="_blank" rel="noopener noreferrer">
                                <div class="lOrder-contact-link-font">CONTACT US</div>
                                <div class="lOrder-contact-link-arrow">
                                    <div class="lOrder-contact-link-arrow-wrap">
                                        <img class="lOrder-contact-link-arrow-img01" src="images/common/c-footer_arrow_diagonal.svg" width="21" height="21" alt="" loading="lazy" srcset="images/common/c-footer_arrow_diagonal.svg 1x,images/common/c-footer_arrow_diagonal.svg 2x">
                                        <img class="lOrder-contact-link-arrow-img02 -pcOnly" src="images/common/c-footer_arrow_diagonal.svg" width="21" height="21" alt="" loading="lazy" srcset="images/common/c-footer_arrow_diagonal.svg 1x,images/common/c-footer_arrow_diagonal.svg 2x">
                                    </div>
                                </div>
                            </a>
                            </div>
                            <div class="lOrder-video">
                                <video class="lOrderVideo" src="https://www.acsl.co.jp/assets-movingsocietyforward/assets/videos/hero.mp4" muted loop playsinline autoplay data-el data-scroll data-scroll-speed="2" data-scroll-call="lOrderVideo" data-scroll-repeat></video>
                            </div>
                        </div>
                        <div data-scroll data-scroll-repeat data-scroll-call="scrollDown" style="position:absolute;top:0;height:5vh"></div>
                    </main>
                    <div data-fixed-local>
                        <div class="cModal lVideo" data-modal="lVideo" data-el>
                            <div class="cModal-content lVideo-content" data-modal-content data-ref>
                                <video class="lVideo-video" data-src="https://www.acsl.co.jp/assets-movingsocietyforward/assets/videos/full.mp4" controls preload="none" data-ref></video>
                            </div>
                            <div class="cModal-close lVideo-close" data-modal-close aria-label="CLOSE">
                                <div class="lVideo-close-side -top"></div>
                                <div class="lVideo-close-side -bottom"></div>
                            </div>
                            <div class="cModal-backdrop" data-modal-backdrop></div>
                                <div class="lVideoMouseStalker" data-el="cMouseStalker">
                                <div class="lVideoMouseStalker-shape -normal" data-ref="cMouseStalker-shapeNormal">
                                    <div class="lVideoMouseStalker-side -top"></div>
                                    <div class="lVideoMouseStalker-side -bottom"></div>
                                </div>
                                <div class="lVideoMouseStalker-shape -accent" data-ref="cMouseStalker-shapeAccent">
                                    <div class="lVideoMouseStalker-side -top"></div>
                                    <div class="lVideoMouseStalker-side -bottom"></div>
                                </div>
                                <div class="lVideoMouseStalker-shape -theme" data-ref="cMouseStalker-shapeTheme">
                                    <div class="lVideoMouseStalker-side -top"></div>
                                    <div class="lVideoMouseStalker-side -bottom"></div>
                                </div>
                            </div>
                        </div>
                        <div class="cLoading" data-el="cLoading">
                            <div class="cLoading-catch" data-ref="cLoading-catch1">MOVING</div>
                            <div class="cLoading-catch" data-ref="cLoading-catch2">SOCIETY</div>
                            <div class="cLoading-catch" data-ref="cLoading-catch3">FORWARD</div>
                            <div class="cLoading-percentage" data-ref="cLoading-percentage"></div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="cFooter" data-scroll data-scroll-call="footer" data-scroll-repeat data-permanent>
                <p><small>&copy;ACSL All Rights Reserved.</small></p>
            </footer>
        </div>
        <div data-fixed-local-container></div>
    </div>
    <div data-permanent>
        <header class="cHeader" data-el="cHeader">
            <div class="cHeader-main">
                <p class="cHeader-text">Autonomous Control Systems Laboratory</p>
                <a class="cHeader-logo" href="/">
                    <p>
                        <img class="cHeader-logo-image" src="images/common/c-logoEN.svg" alt="ACSL">
                    </p>
                </a>
            </div>
            <nav class="cHeader-nav">
                <ul class="cHeader-list">
                    <li class="cHeader-item">
                        <a class="cHeader-link" href="/#outline" data-el="cHoverOverlap">OUTLINE</a>
                    </li>
                    <li class="cHeader-item">
                        <a class="cHeader-link" href="/#news" data-el="cHoverOverlap">NEWS</a>
                    </li>
                    <li class="cHeader-item">
                        <a class="cHeader-link" href="/#order" data-el="cHoverOverlap">ORDER</a>
                    </li>
                </ul>
            <p>
                <a class="cHeader-menu" data-modal-trigger="menu" data-el="cHoverOverlap">MENU</a>
            </p>
            </nav>
        </header>
        <div class="cModal cMenu" data-modal="menu" data-el>
            <div class="cModal-backdrop cMenu-background" data-modal-backdrop></div>
            <div class="cModal-content cMenu-content" data-modal-content>
                <div class="cModal-close" data-modal-close>
                    <span data-ref="cMenu-cHoverOverlap">close</span>
                </div>
                <a class="cMenu-logo" href="/">
                    <p>
                        <img class="cMenu-logo-image" src="images/common/c-logoEN.svg" alt="ACSL" loading="lazy">
                    </p>
                </a>
                <div class="cMenu-group">
                    <a class="cMenu-item" href="/#outline" data-ref>
                        <span class="cMenu-item-line -top">
                            <span class="cMenu-item-line-child -left"></span>
                            <span class="cMenu-item-line-child -right"></span>
                        </span>
                        <span class="cMenu-item-line -bottom">
                            <span class="cMenu-item-line-child -left"></span>
                            <span class="cMenu-item-line-child -right"></span>
                        </span><span class="cMenu-linkTitle">OUTLINE</span>
                    </a>
                    <a class="cMenu-item" href="/#news" data-ref>
                        <span class="cMenu-item-line -top">
                            <span class="cMenu-item-line-child -left"></span>
                            <span class="cMenu-item-line-child -right"></span>
                        </span>
                        <span class="cMenu-item-line -bottom">
                            <span class="cMenu-item-line-child -left"></span>
                            <span class="cMenu-item-line-child -right"></span>
                        </span>
                        <span class="cMenu-linkTitle">NEWS</span>
                    </a>
                    <a class="cMenu-item" href="/#order" data-ref>
                        <span class="cMenu-item-line -top">
                            <span class="cMenu-item-line-child -left"></span>
                            <span class="cMenu-item-line-child -right"></span>
                        </span>
                        <span class="cMenu-item-line -bottom">
                            <span class="cMenu-item-line-child -left"></span>
                            <span class="cMenu-item-line-child -right"></span>
                        </span>
                        <span class="cMenu-linkTitle">ORDER</span>
                    </a>
                </div>
                <p class="cMarquee cMenu-marquee" aria-label="DEC 2021 RELEASE" data-ref>
                    <span class="cMarquee-line" data-ref>
                        <span class="cMarquee-text" data-ref>DEC 2021 RELEASE</span>
                    </span>
                </p>
            </div>
        </div>
        <canvas class="cRay" data-el></canvas>
        <canvas class="cRayBackground" data-el></canvas>
        <canvas class="cCylinder" data-el></canvas>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
    const libs = ["vendor", "pace.min", "main", "index"];
    const head = document.getElementsByTagName("head")[0];

    for (const lib of libs) {
        const script = document.createElement("script");

        script.defer = true;
        script.src = `./libs/${ lib }.js?v=4`;

        head.appendChild(script);
    }
});
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
