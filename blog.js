setTimeout(() => {
    var converter = new showdown.Converter();
    let urlParams = new URLSearchParams(window.location.search).get('post');
    var fetch_output;
    var posts_innerHTML = document.querySelector(".posts");
    fetch('posts.json')
        .then(res => res.json())
        .then(res => {
            console.log("第一次抓到：")
            fetch_output = res.values.reverse();
            console.log(res);
            console.log(fetch_output);

        })
        .then(() => {
            console.log("這一次總共抓到" + fetch_output.length + "篇文章。");
            for (let i = 0; i < (fetch_output.length - 1); i++) {
                // console.log(
                //     fetch_back_posts.values[i][0] +
                //     fetch_back_posts.values[i][1] +
                //     fetch_back_posts.values[i][2] +
                //     fetch_back_posts.values[i][3] +
                //     fetch_back_posts.values[i][4]
                // );
                input_things = fetch_output[i];
                console.log("回圈的查詢：");
                console.log(input_things);
                if (input_things[0] == urlParams) {
                    output_things = [input_things[0],
                        input_things[1],
                        input_things[2],
                        input_things[3],
                        input_things[4],
                        input_things[5],
                        input_things[6],
                        input_things[7]
                    ]
                    if (document.querySelector(".post-title")) {
                        document.querySelector(".post-title").innerText = output_things[1];
                        document.querySelector('.bg').style.backgroundImage = `url("${input_things[4]}")`;
                        document.querySelector(".post-date").innerHTML = `<a href="index" class="amination-loader">← BACK</a><div class="mx-2"> · </div><div class="amination-loader">${output_things[2]}</div>`;
                        document.querySelector(".post-content").innerHTML = converter.makeHtml(output_things[3]);
                        if (input_things[7]) {
                            document.querySelector("body style").innerHTML = `
                        :root {
                            --color-primary-light: ${input_things[5]} ;
                            --color-secondary-light: ${input_things[6]} ;
                            --color-tertiary-light: ${input_things[7]} ;
                            --color-primary-dark: ${input_things[6]} ;
                            --color-secondary-dark: ${input_things[5]} ;
                            --color-tertiary-dark: ${input_things[7]} ;
                        }`;
                            document.querySelector('meta[name="theme-color"]').outerHTML = `<meta name="theme-color" content="${input_things[7]}">`
                        }

                        if (input_things[0] !== urlParams) {
                            document.querySelector(".post-title").innerText = "Not Found";
                            document.querySelector('.bg').style.backgroundImage = "Not Found";
                            document.querySelector(".post-date").innerHTML = `<a href="index">← BACK</a>`;
                            document.querySelector(".post-content").innerHTML = "Not Found";
                            document.querySelector("body style").innerHTML = ``;
                        }
                    } else {
                        console.log("沒有文章介面");
                    }
                    // 找到的文章
                    console.log(`從URL找到了${input_things[0]}：`);
                    console.log(output_things);
                    // 文章內容
                    console.log("從URL找到的文章HTML：");
                    console.log(converter.makeHtml(output_things[3]))
                } else {
                    // 找不到
                    console.log("沒有找到任何文章 URL");
                }
                if (posts_innerHTML) {
                    posts_innerHTML.innerHTML = posts_innerHTML.innerHTML + `
              <!-- Post -->
              <a href="post?post=${input_things[0]}" class="gcg post py-2 -underline">
                  <div class="gcg-3-10 -aa">
                      <p class="fw-500 mb-1">${input_things[2]}</p>
                      <h2>${input_things[1]}</h2>
                  </div>
                  <div class="gcg-14-19">
                      <div class="w-100 h-100 bg" style="background-image: url(${input_things[4]});"></div>
                  </div>
              </a>`;
                    // <p>ID：${input_things[0]}</p>
                    // <p>標題：${input_things[1]}</p>
                    // <p>日期：${input_things[2]}</p>
                    // <p>內容：${input_things[3]}</p>
                    // <p>封面：${input_things[4]}</p>
                } else {
                    console.log("沒有文章列表 .posts");
                }
            }
        })
        // fetch('https://sheets.googleapis.com/v4/spreadsheets/1l5SL0tOqY_eaX9BCFr1pulmw2ldfBCRJRonZU5XEw4E/values/posts?alt=json&key=AIzaSyBdDg9HUG3s3377BO72GvlEBFJYYQwjBvc', {
        //         method: 'PUT',
        //         body: {
        //             "values": [
        //                 "00001",
        //                 "HI",
        //                 "2021, may 23",
        //                 "none",
        //                 "??????.png"
        //             ]
        //         }
        //     })
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res)
        //     })


    document.querySelector('.footer').innerHTML = `
    
    <div class="gcg -aa">
                <div class="gcg-3-19 m:gcg-3-10 mt-5">
                    <h1>hercs</h1>
                </div>
                <div class="gcg-3-19 m:gcg-10-19 m:text-right m:mt-5">
                    <h1 class="m-0">.arrrrrt</h1>
                </div>
            </div>
            <div class="gcg mt-5">
                <div class="gcg-3-17 m:gcg-3-11">
                    Amet curabitur at accumsan ut elit enim. Adipiscing tempus vestibulum vitae pretium, cursus id urna purus. Neque in ultricies scelerisque at non ac. Sit cursus eu, vel felis quis et in id consectetur. Ridiculus nec diam, interdum in malesuada ut facilisi.
                    Blandit in nisl posuere enim. Varius eget cursus vel feugiat mauris nunc. Odio amet accumsan aliquet egestas habitasse lacus, turpis ornare feugiat. Habitasse a montes, dolor sed mattis adipiscing nullam. Et vivamus habitant vel duis
                    consectetur ornare at magna. Nisi massa vitae eros, ut volutpat, elit suspendisse. Odio risus egestas imperdiet viverra egestas accumsan. Tellus at donec aliquam scelerisque. Faucibus semper rutrum massa mauris elementum, sit viverra
                    in adipiscing. Sit neque eget nec in nunc neque quam.
                </div>
            </div>
            <div class="gcg mt-15 -aa">
                <div class="gcg-3-5">
                    hercs © 2021
                </div>
                <div class="gcg-5-19 text-right">
                    <a href="#" class="ml-3">twitter</a><a href="#" class="ml-3">youtube</a><a href="#" class="ml-3">instergram</a><a href="#" class="ml-3">discord</a>
                </div>
            </div>
    
    `

    if (document.querySelector('[data-scroll-container]')) {
        var scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        });
        setTimeout(() => {
            scroll.update();
            // console.log(234)
        }, 1000)
    }
}, 1000);