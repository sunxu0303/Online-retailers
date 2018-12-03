;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fenlei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M196.277147 225.916333c0 12.674671-10.264182 22.950711-22.951652 22.950711L87.253731 248.867044C74.567285 248.867044 64.300033 238.58998 64.300033 225.916333l0-86.069261C64.300033 127.172401 74.567285 116.895337 87.253731 116.895337l86.071764 0c12.68747 0 22.951652 10.276041 22.951652 22.950711L196.277147 225.916333z"  ></path>' +
    '' +
    '<path d="M959.45027 225.916333c0 12.674671-10.265205 22.950711-22.951652 22.950711L311.040523 248.867044c-12.686447 0-22.952675-10.276041-22.952675-22.950711l0-86.069261c0-12.674671 10.266228-22.950711 22.952675-22.950711l625.458095 0c12.685423 0 22.951652 10.276041 22.951652 22.950711L959.45027 225.916333z"  ></path>' +
    '' +
    '<path d="M196.277147 532.893866c0 12.674671-10.264182 22.951735-22.951652 22.951735L87.253731 555.845601C74.567285 555.845601 64.300033 545.568537 64.300033 532.893866l0-86.069261c0-12.674671 10.266228-22.951735 22.952675-22.951735l86.071764 0c12.68747 0 22.951652 10.276041 22.951652 22.951735L196.276124 532.893866z"  ></path>' +
    '' +
    '<path d="M959.45027 532.893866c0 12.674671-10.265205 22.951735-22.951652 22.951735L311.040523 555.845601c-12.686447 0-22.952675-10.277064-22.952675-22.951735l0-86.069261c0-12.674671 10.266228-22.951735 22.952675-22.951735l625.458095 0c12.685423 0 22.951652 10.276041 22.951652 22.951735L959.45027 532.893866z"  ></path>' +
    '' +
    '<path d="M196.277147 839.871399c0 12.674671-10.264182 22.951735-22.951652 22.951735L87.253731 862.823134C74.567285 862.823134 64.300033 852.54607 64.300033 839.871399l0-86.068238c0-12.675694 10.266228-22.952758 22.952675-22.952758l86.071764 0c12.68747 0 22.951652 10.277064 22.951652 22.952758L196.276124 839.871399z"  ></path>' +
    '' +
    '<path d="M959.45027 839.871399c0 12.674671-10.265205 22.951735-22.951652 22.951735L311.040523 862.823134c-12.686447 0-22.952675-10.277064-22.952675-22.951735l0-86.068238c0-12.675694 10.266228-22.952758 22.952675-22.952758l625.458095 0c12.685423 0 22.951652 10.277064 22.951652 22.952758L959.45027 839.871399z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M704 480l-160 0 0-160c0-17.664-14.304-32-32-32-17.664 0-32 14.336-32 32l0 160-160 0c-17.664 0-32 14.336-32 32 0 17.696 14.336 32 32 32l160 0 0 160c0 17.696 14.336 32 32 32 17.696 0 32-14.304 32-32l0-160 160 0c17.696 0 32-14.304 32-32C736 494.336 721.696 480 704 480zM896 0 128 0C57.312 0 0 57.312 0 128l0 768c0 70.688 57.312 128 128 128l768 0c70.688 0 128-57.312 128-128L1024 128C1024 57.312 966.688 0 896 0zM960 896c0 35.328-28.672 64-64 64L128 960c-35.328 0-64-28.672-64-64L64 128c0-35.328 28.672-64 64-64l768 0c35.328 0 64 28.672 64 64L960 896z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-youxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M788.527011 227.599671 237.519602 227.599671c-38.039361 0-68.876694 30.837332-68.876694 68.87567l0 367.338273c0 38.040385 30.837332 68.877717 68.876694 68.877717l551.007409 0c38.039361 0 68.87567-30.837332 68.87567-68.877717L857.402681 296.476365C857.403704 258.437004 826.566372 227.599671 788.527011 227.599671zM834.444806 642.768299c0 38.040385-30.837332 68.877717-68.87567 68.877717L260.4785 711.646016c-38.039361 0-68.87567-30.837332-68.87567-68.877717l0-325.247642c0-38.038338 30.836309-68.87567 68.87567-68.87567l505.090637 0c38.038338 0 68.87567 30.837332 68.87567 68.87567L834.444806 642.768299z"  ></path>' +
    '' +
    '<path d="M781.056875 580.696592 795.998169 563.265594 644.917242 433.767218 765.569136 313.116347 748.929154 296.476365 501.340219 544.063253 268.595364 311.318398 252.361635 327.551104 370.162598 445.353091 237.518578 577.996087 254.461459 594.938967 387.105478 462.295971 501.727029 576.918545 517.980201 560.703235 517.980201 560.703235 628.63644 450.049043Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-address" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M677.720857 371.147018c0-91.64321-74.28589-165.928077-165.928077-165.928077s-165.928077 74.28589-165.928077 165.928077S420.149571 537.075095 511.79278 537.075095 677.720857 462.789205 677.720857 371.147018zM382.737496 371.147018c0-71.26202 57.776891-129.055285 129.055285-129.055285 71.279417 0 129.055285 57.794287 129.055285 129.055285 0 71.278393-57.775868 129.055285-129.055285 129.055285C440.513364 500.202303 382.737496 442.425412 382.737496 371.147018zM806.776142 371.147018c0-162.903184-132.061758-294.984385-294.984385-294.984385S216.808396 208.242811 216.808396 371.147018s294.984385 516.222161 294.984385 516.222161S806.776142 534.050202 806.776142 371.147018zM511.79278 113.035426c142.540414 0 258.110569 115.552759 258.110569 258.111592 0 142.558833-258.110569 460.912461-258.110569 460.912461S253.681188 513.704828 253.681188 371.147018C253.681188 228.588185 369.251344 113.035426 511.79278 113.035426zM642.187573 769.187547c-8.074909 11.081383-15.950274 21.710464-23.52274 31.794124 78.722946 9.06854 132.801609 27.838022 132.801609 49.513694 0 30.53648-107.304911 55.3097-239.674685 55.3097-132.36875 0-239.674685-24.77322-239.674685-55.3097 0-21.675672 54.079686-40.444131 132.802632-49.513694-7.572466-10.083659-15.448854-20.712741-23.52274-31.794124-86.981027 15.531741-146.152684 46.113247-146.152684 81.307817 0 50.916647 123.81698 92.182492 276.5485 92.182492s276.547477-41.265846 276.547477-92.182492C788.340257 815.300794 729.1686 784.719288 642.187573 769.187547z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhuye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M237.047858 939.814646l174.957731 0L412.005588 747.195673c0-13.305027 28.04166-26.076912 41.3692-26.076912l127.032208 0c13.283538 0 50.2955 12.771885 50.2955 26.076912l0 192.618972 174.957731 0L805.660226 546.160008l194.649212 0L511.997953 84.185354 23.691585 546.160008l213.356272 0L237.047858 939.814646z"  ></path>' +
    '' +
    '<path d="M237.047858 939.814646l174.957731 0L412.005588 747.195673c0-13.305027 28.04166-26.076912 41.3692-26.076912l127.032208 0c13.283538 0 50.2955 12.771885 50.2955 26.076912l0 192.618972 174.957731 0L805.660226 546.160008l194.649212 0L511.997953 84.185354 23.691585 546.160008l213.356272 0L237.047858 939.814646z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiugaimima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M199.264865 463.622918C173.294011 463.622918 153.433946 483.482984 153.433946 509.453836L153.433946 906.655134C153.433946 932.62599 173.294011 952.486056 199.264865 952.486056L840.897729 952.486056C866.868584 952.486056 886.728647 932.62599 886.728647 906.655134L886.728647 509.453836C886.728647 483.482984 866.868584 463.622918 840.897729 463.622918L199.264865 463.622918ZM840.897729 983.04 199.264865 983.04C156.489341 983.04 122.88 949.430661 122.88 906.655134L122.88 509.453836C122.88 466.678313 156.489341 433.068973 199.264865 433.068973L840.897729 433.068973C883.673256 433.068973 917.282595 466.678313 917.282595 509.453836L917.282595 906.655134C917.282595 949.430661 883.673256 983.04 840.897729 983.04L840.897729 983.04Z"  ></path>' +
    '' +
    '<path d="M764.512866 440.707459 733.958918 440.707459 733.958918 290.993124C733.958918 171.832735 636.186292 74.060108 517.025903 74.060108 400.920908 74.060108 306.203676 168.777341 306.203676 284.882335L306.203676 440.707459 275.64973 440.707459 275.64973 284.882335C275.64973 151.97267 384.116238 43.506162 517.025903 43.506162 652.990964 43.506162 764.512866 155.028065 764.512866 290.993124L764.512866 440.707459Z"  ></path>' +
    '' +
    '<path d="M520.081297 578.200216C486.471957 578.200216 458.973406 605.698769 458.973406 639.308108 458.973406 663.751266 472.722681 685.139026 495.638141 695.832908L504.804324 700.416 504.804324 808.882508C504.804324 818.048692 510.915113 824.159482 520.081297 824.159482 529.247481 824.159482 535.358271 818.048692 535.358271 808.882508L535.358271 700.416 544.524456 695.832908C567.439913 686.666723 581.18919 663.751266 581.18919 639.308108 581.18919 605.698769 553.690636 578.200216 520.081297 578.200216M520.081297 853.185729C494.110443 853.185729 474.250378 833.325666 474.250378 807.35481L474.250378 718.748369C446.751827 701.943697 428.419459 672.917447 428.419459 639.308108 428.419459 588.894097 469.667287 547.646271 520.081297 547.646271 570.495308 547.646271 611.743134 588.894097 611.743134 639.308108 611.743134 672.917447 593.410769 701.943697 565.912216 718.748369L565.912216 807.35481C565.912216 833.325666 546.052153 853.185729 520.081297 853.185729"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenlei1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.347924 62.941518c-247.557212 0-448.304306 200.747093-448.304306 448.302259 0 247.620657 200.747093 448.306352 448.304306 448.306352 247.617587 0 448.306352-200.684672 448.306352-448.306352C960.653253 263.688611 759.966535 62.941518 512.347924 62.941518zM512.347924 928.261519c-230.345202 0-417.017742-186.67561-417.017742-417.017742 0-230.311433 186.67561-417.016719 417.017742-417.016719s417.018765 186.706309 417.018765 417.016719C929.368736 741.586932 742.691079 928.261519 512.347924 928.261519z"  ></path>' +
    '' +
    '<path d="M284.554848 384.694569l455.588199 0c13.980409 0 25.311479-11.33107 25.311479-25.311479 0-13.980409-11.33107-25.311479-25.311479-25.311479l-455.588199 0c-13.975293 0-25.311479 11.33107-25.311479 25.311479S270.580578 384.694569 284.554848 384.694569zM740.143047 485.934345 284.554848 485.934345c-13.975293 0-25.311479 11.336186-25.311479 25.311479 0 13.980409 11.336186 25.311479 25.311479 25.311479l455.588199 0c13.980409 0 25.311479-11.33107 25.311479-25.311479C765.454526 497.270531 754.123456 485.934345 740.143047 485.934345zM740.143047 637.797078 284.554848 637.797078c-13.975293 0-25.311479 11.33107-25.311479 25.311479 0 13.975293 11.336186 25.311479 25.311479 25.311479l455.588199 0c13.980409 0 25.311479-11.336186 25.311479-25.311479C765.454526 649.128147 754.123456 637.797078 740.143047 637.797078z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-suo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M229.516324 297.958112 799.366893 297.958112 229.516324 297.958112Z"  ></path>' +
    '' +
    '<path d="M793.603633 443.282942 246.026346 443.282942l0-92.260264 1.965771 0c0-0.058328-0.004093-0.115634-0.004093-0.173962 0-147.313114 119.420857-266.73397 266.732947-266.73397s266.73397 119.420857 266.73397 266.73397c0 0.058328-0.004093 0.115634-0.004093 0.173962l16.210193 0c0-157.852144-127.96444-285.815561-285.815561-285.815561-148.592246 0-270.66142 113.402793-284.47503 258.377652l-1.340531 0 0 119.845529c-52.136428 1.556449-94.330412 44.578288-94.330412 97.074919l0 322.30973c0 53.472865 43.750433 97.222275 97.222275 97.222275l564.680826 0c53.471842 0 97.222275-43.74941 97.222275-97.222275L890.824885 540.505217C890.825908 487.033375 847.075475 443.282942 793.603633 443.282942zM873.148293 845.066725c0 53.471842-43.750433 97.222275-97.222275 97.222275L250.115478 942.289c-53.471842 0-97.222275-43.74941-97.222275-97.222275l-2.901073-286.268886c0-53.471842 43.74941-97.222275 97.222275-97.222275l525.81054 0c53.471842 0 97.222275 43.74941 97.222275 97.222275L873.148293 845.066725z"  ></path>' +
    '' +
    '<path d="M515.836375 575.901379c-35.358299 0-64.022129 28.66383-64.022129 64.023152 0 29.821189 20.418029 54.806233 48.016597 61.924351l0 102.70515 34.298154 0L534.128997 701.260481c26.439162-7.874341 45.730531-32.338522 45.730531-61.33595C579.858504 604.565209 551.194674 575.901379 515.836375 575.901379z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wode" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M582.3952 516.099269 413.265278 516.099269c-144.737676 0-262.159072 120.34535-262.159072 268.699502l0 17.313142c0 60.634394 117.344456 60.711334 262.159072 60.711334l169.129922 0c144.737612 0 262.159072-2.231479 262.159072-60.711334l0-17.313142C844.554208 636.444603 727.132812 516.099269 582.3952 516.099269zM292.996788 279.717472c0 113.126388 91.707039 204.833443 204.833443 204.833443s204.833443-91.707039 204.833443-204.833443S610.956587 74.884061 497.830215 74.884061 292.996788 166.591099 292.996788 279.717472z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaolian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M865.521 752.146l0.113 0 0-0.684L865.521 752.146 865.521 752.146 865.521 752.146zM383.075 469.326c24.348 0 44.16-19.785 44.16-44.11 0-24.359-19.812-44.175-44.16-44.175-24.41 0-44.219 19.816-44.219 44.175C338.856 449.541 358.665 469.326 383.075 469.326L383.075 469.326 383.075 469.326zM637.474 469.399c24.382 0 44.222-19.832 44.222-44.16 0-24.352-19.84-44.137-44.222-44.137-24.348 0-44.164 19.785-44.164 44.137C593.31 449.568 613.126 469.399 637.474 469.399L637.474 469.399 637.474 469.399zM510.604 712.544c-56.593 0-110.284-11.459-159.582-34.06-12.551-5.754-18.061-20.593-12.307-33.144 5.753-12.553 20.592-18.062 33.144-12.308 42.714 19.582 89.395 29.511 138.745 29.511 47.769 0 93.761-9.843 136.699-29.256 12.579-5.688 27.39-0.1 33.079 12.481 5.688 12.581 0.1 27.391-12.481 33.079C618.445 701.207 565.523 712.544 510.604 712.544zM512.006 949.117c-116.733 0-226.487-45.442-309.044-127.956C120.405 738.553 74.957 628.76 74.978 511.999c0-116.773 45.474-226.553 128.044-309.113 82.55-82.543 192.309-128.002 309.056-128.002 116.752 0 226.532 45.455 309.118 127.99 170.407 170.467 170.405 447.788 0.007 618.201C738.574 903.646 628.769 949.117 512.006 949.117zM512.078 124.883c-103.393 0-200.596 40.258-273.703 113.359-73.126 73.117-113.398 170.34-113.398 273.761-0.019 103.413 40.233 200.65 113.341 273.804 73.104 73.065 170.305 113.311 273.688 113.311 103.414 0 200.668-40.274 273.847-113.404 150.902-150.915 150.901-396.518-0.009-547.483C712.709 165.14 615.48 124.883 512.078 124.883z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M700.856275 155.542542c-74.768891 0-144.295384 72.696696-190.046381 127.260405C465.073224 228.226958 395.563104 155.542542 320.754305 155.542542c-134.789892 0-244.443291 105.780185-244.443291 235.799424 0 77.56968 39.277562 131.98808 70.844511 175.712931 91.752704 126.998439 322.464249 285.038872 332.234777 291.701618 9.410324 6.414083 20.424168 9.629311 31.401174 9.629311 11.005658 0 21.998013-3.215228 31.397081-9.629311 9.782807-6.662747 240.514819-164.703179 332.23887-291.701618 31.586392-43.723827 70.873164-98.143251 70.873164-175.712931C945.299567 261.321704 835.645145 155.542542 700.856275 155.542542L700.856275 155.542542zM700.856275 155.542542"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wode-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1019.552 510.636c0-279.808-227.694-507.419-507.565-507.419-279.87 0-507.543 227.611-507.543 507.419 0 145.375 61.567 276.582 159.894 369.179l-0.356 0.441 12.825 11.276c1.738 1.53 3.617 2.823 5.376 4.31 9.018 7.741 18.242 15.23 27.805 22.322 2.656 1.966 5.377 3.829 8.076 5.754 10.23 7.278 20.647 14.307 31.401 20.835 1.695 1.027 3.452 1.968 5.167 2.971 11.38 6.717 23.012 13.055 34.935 18.892 0.67 0.337 1.317 0.69 1.987 1.025 12.827 6.212 26.005 11.797 39.394 16.924 0.985 0.378 1.946 0.775 2.909 1.151 13.118 4.938 26.526 9.269 40.125 13.118 1.277 0.357 2.529 0.733 3.807 1.088 13.345 3.663 26.903 6.779 40.647 9.353 1.57 0.292 3.117 0.563 4.687 0.836 13.579 2.405 27.322 4.351 41.253 5.648 1.55 0.148 3.097 0.233 4.626 0.357 14.183 1.195 28.492 1.946 42.99 1.946 14.499 0 28.809-0.751 42.993-1.946 1.529-0.124 3.053-0.209 4.583-0.357 13.953-1.296 27.719-3.242 41.338-5.648 1.506-0.271 3.011-0.526 4.539-0.815 13.828-2.596 27.445-5.712 40.859-9.393 1.171-0.314 2.341-0.669 3.514-1.004 13.725-3.873 27.238-8.263 40.48-13.242 0.798-0.294 1.593-0.629 2.387-0.942 13.599-5.19 26.946-10.858 39.935-17.177 0.398-0.189 0.775-0.396 1.171-0.607 12.345-6.027 24.352-12.573 36.111-19.539 1.443-0.855 2.93-1.651 4.369-2.509 11.027-6.673 21.675-13.847 32.134-21.319 2.447-1.738 4.916-3.428 7.322-5.21 9.791-7.257 19.267-14.934 28.495-22.884 1.61-1.382 3.347-2.572 4.935-3.974l12.783-11.279-0.336-0.396c98.363-92.553 159.951-223.783 159.951-369.181zM71.007 521.261c0-243.091 197.835-440.866 440.982-440.866s440.983 197.758 440.983 440.866c0 126.022-53.255 239.789-138.357 320.209-31.203-30.151-79.15-55.226-135.798-70.877-25.623-11.3-31.341-14.073-37.801-19.222l-6.867-6.848c-10.342-10.050-16.042-15.574-18.052-30.539v-67.753c18.17-21.135 29.682-49.274 40.961-86.372 15.28-5.835 30.482-25.113 35.303-46.578 5.134-23.164 2.693-42.601-6.129-53.412 24.922-94.176 21.094-174.633-10.653-216.706-16.705-22.148-41.001-33.878-70.271-33.898-2.693-2.204-4.468-4.625-6.693-7.65-11.436-15.631-23.613-26.714-76.533-26.714l-5.682 0.038c-63.575 0-111.776 19.143-143.252 56.944-40.377 48.395-51.811 125.594-34.112 229.565-7.61 10.869-9.934 29.077-5.854 50.678 3.843 20.177 16.587 38.462 30.89 45.973 13.914 40.471 28.413 68.593 45.059 87.445 0.955 30.656 1.267 65.234 0.057 71.79-1.773 9.504-6.887 18.244-16.138 27.477-8.665 8.663-20.237 15.006-44.257 24.566-59.206 16.317-107.894 41.606-139.39 72.026-85.141-80.371-138.396-194.123-138.396-320.144zM758.477 868.621c-6.246 5.506-12.594 6.258-19.109 11.295-1.484 1.141-2.9 2.357-4.397 3.483-7.612 5.729-25.564 13.322-33.515 18.395-1.662 1.068-3.33 2.174-5.017 3.223-8.163 5.034-18.813 6.205-27.279 10.548-1.366 0.711-2.745 1.387-4.127 2.080-8.978 4.476-18.067 8.613-27.313 12.302-0.471 0.19-0.943 0.337-1.397 0.524-19.381 7.602-36.989 8.719-57.297 12.766-1.18 0.222-2.34 0.484-3.535 0.692-9.581 1.799-19.263 3.203-28.994 4.179-1.499 0.146-3.013 0.24-4.513 0.393-9.933 0.88-19.902 1.422-29.937 1.422s-20-0.562-29.937-1.422c-1.516-0.134-3.033-0.224-4.53-0.393-9.731-0.976-19.381-2.379-28.978-4.179-1.196-0.223-2.375-0.467-3.57-0.71-20.237-4.028-40.125-6.301-59.438-13.887-0.541-0.205-1.095-0.391-1.634-0.618-9.161-3.651-18.17-7.772-27.061-12.189-1.499-0.749-2.997-1.497-4.478-2.246-8.336-4.291-16.535-4.204-24.586-9.17-1.867-1.141-3.703-2.358-5.537-3.539-7.762-4.98-21.031-3.327-28.491-8.906-1.751-1.31-3.435-2.735-5.151-4.082-6.13-4.774-12.142-14.482-18.034-19.65-1.431-1.253-2.879-2.474-4.294-3.764 23.81-24.811 66.812-37.607 113.723-52.063 22.732-9.981 37.297-17.866 49.134-31.049 12.005-13.35 33.717-50.497 36.294-65.89 2.155-13.183 0.706-65.671 0.219-81.458l-0.186-6.086-3.856-4.305c-13.741-15.43-29.254-42.004-41.631-83.575l-0.857-10.786-10.524 0.466c-2.493-1.251-10.020-10.092-12.141-22.637-1.87-10.973-1.23-18.932-0.336-22.807l9.292-1.742-2.542-15.561c-15.575-94.475-19.397-151.434 10.81-191.751 21.621-28.819 55.954-43.423 102.292-43.423l4.717-0.057c34.971 0 38.707 5.694 43.44 12.884 3.333 5.075 7.915 12.003 17.039 18.015l3.605 2.378 7.609-0.3c16.637 0 33.699 8.865 42.891 22.423 22.883 33.726 7.862 93.47-13.825 177.904l-2.241 14.965 10.678 3.761c0.841 3.597 1.414 11.856-0.878 23.391-1.885 9.359-6.736 16.571-10.121 20.092l-11.418-9.533-5.653 21.647c-8.85 33.889-20.942 68.689-35.345 85.333l-3.906 4.513 0.117 79.229c3.034 27.135 24.905 61.75 35.191 72.855l6.532 7.099c9.85 8.97 17.514 12.922 42.128 24.812 45.175 14.026 92.108 26.754 115.664 51.321-1.229 1.196-2.509 2.285-3.773 3.39z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M955.733 286.72l-95.573 293.547v27.307c0 13.653-13.653 27.307-27.307 27.307h-491.52l20.48 81.92h471.040c13.653 0 27.307 13.653 27.307 27.307v27.307c0 13.653-13.653 27.307-27.307 27.307h-491.52c-6.827 0-13.653-6.827-20.48-13.653-13.653 0-20.48-6.827-20.48-20.48l-163.84-607.573h-88.747c-13.653 0-27.307-13.653-27.307-27.307v-27.307c0-13.653 13.653-27.307 27.307-27.307h129.707c13.653 0 27.307 13.653 27.307 27.307v0l27.307 102.4h709.973c13.653 0 27.307 13.653 27.307 27.307v27.307c0 13.653-6.827 20.48-13.653 27.307zM819.2 443.733h-81.92l-6.827 102.4h54.613l34.133-102.4zM600.747 552.96h54.613l6.827-109.227h-61.44v109.227zM368.64 286.72h-116.053l20.48 81.92h102.4l-6.827-81.92zM382.293 443.733h-88.747l27.307 102.4h68.267l-6.827-102.4zM518.827 286.72h-75.093l6.827 81.92h68.267v-81.92zM518.827 443.733h-61.44l6.827 102.4h54.613v-102.4zM600.747 368.64h68.267l6.827-81.92h-75.093v81.92zM757.76 286.72l-6.827 81.92h88.747c0 0 6.827 0 6.827 0l27.307-81.92h-116.053zM402.773 812.373c34.133 0 68.267 27.307 68.267 68.267s-27.307 68.267-68.267 68.267-68.267-27.307-68.267-68.267 34.133-68.267 68.267-68.267zM744.107 812.373c34.133 0 68.267 27.307 68.267 68.267s-27.307 68.267-68.267 68.267-68.267-27.307-68.267-68.267 34.133-68.267 68.267-68.267z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon03" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M233.072 600.128l450.32 0 0 45.712-450.32 0 0-45.712Z"  ></path>' +
    '' +
    '<path d="M233.072 710.032l450.32 0 0 45.712-450.32 0 0-45.712Z"  ></path>' +
    '' +
    '<path d="M825.36 990.576 91.088 990.576c-21.52 0-39.04-17.68-39.04-39.392l0-531.68 232.992-298.4 540.336 0c21.52 0 39.04 17.696 39.04 39.44l0 41.824-45.712 0 0-35.552L305.648 166.816 97.76 436.784l0 508.08 720.944 0L818.704 326.064l45.712 0 0 625.104C864.4 972.896 846.88 990.576 825.36 990.576z"  ></path>' +
    '' +
    '<path d="M346.112 449.792 156.176 449.792l0-45.712 183.168 0L339.344 218.288l45.712 0 0 189.472C385.072 430.928 367.584 449.792 346.112 449.792z"  ></path>' +
    '' +
    '<path d="M934.816 959.968l-44.144 0 0-45.712 36 0L926.672 76.288l-544.16 0 0 7.12L336.8 83.408 336.8 68.4c0-20.864 16.848-37.84 37.568-37.84l560.448 0c20.72 0 37.568 16.96 37.568 37.84l0 853.728C972.384 943.008 955.536 959.968 934.816 959.968z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-mima1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M251.315685 408.904132c0-43.655464 1.795953-85.366592-0.327467-126.873053C243.819757 141.783041 347.422176 53.459012 448.824424 28.832459c125.512017-30.485145 257.982711 21.223964 316.10813 125.670634 26.806256 48.168371 31.477779 100.41473 26.187138 153.576975-3.412822 34.302184-33.83145 59.266437-66.358147 59.547854-32.802998 0.281417-60.422805-23.720901-66.997731-58.667786-1.248468-6.626093-2.47647-13.789437-1.294519-20.26203 17.350642-94.955239-95.72274-151.781022-176.750392-126.883286-63.656543 19.561045-92.033618 57.1686-91.956868 122.912747 0.04605 39.193724 0.296767 78.387448 0.557717 117.581172 0.010233 1.529886 1.079618 3.054654 2.870454 7.808045 7.869445 0 16.931075 0 25.997821 0 126.985619 0 253.991705 1.458252 380.946625-0.537251 77.978114-1.222885 125.419917 53.791595 123.567681 123.547214-3.274671 123.490931-0.859601 247.125129-0.941468 370.703043-0.04605 70.958037-43.558247 114.122301-115.022835 114.142767-189.19926 0.051167-378.398521 0.04605-567.592665 0-72.452106-0.020467-115.212152-43.27683-115.237735-116.501554-0.040933-119.315725 2.870454-238.72355-1.002868-357.911358C119.213391 461.130025 163.53914 408.863199 251.315685 408.904132zM521.690981 997.730995c90.350232 0 180.695348 0.005117 271.04558 0 75.609094-0.005117 107.782741-31.810363 107.787858-106.559856 0.010233-117.622106 0.005117-235.249328 0-352.871434-0.005117-74.207125-31.319163-105.823055-105.168121-105.869105-132.967011-0.081867-265.934023-0.368401-398.895918 0.296767-22.6771 0.112567-32.393664-6.96891-31.718263-30.781912 1.284285-45.139299-2.20017-90.544666 1.437785-135.428132 1.893169-23.362734 9.696098-49.611273 23.516234-68.04665 58.064018-77.47668 175.205157-85.074941 247.166062-20.374597 36.799121 33.084415 44.110848 74.299226 42.529796 120.390226-0.915885 26.785789 16.178924 44.612282 40.498476 46.935252 23.956268 2.287153 46.914785-13.666637 49.314506-38.288073 6.288393-64.516145-2.00062-125.599001-46.981302-177.057393C646.942048 43.952231 518.933093 15.493289 411.963903 63.89191 321.567621 104.789487 270.90743 173.148254 272.918283 275.691521c0.787968 40.043092 0.173967 80.116884 0.112567 120.175326-0.051167 35.770669-0.102333 35.770669-34.639884 36.548404-61.998741 1.396852-95.185489 35.392035-95.226423 97.90756-0.081867 123.588148-0.127917 247.181412 0.020467 370.76956 0.071633 60.980523 35.908819 96.515825 97.227042 96.597692C334.175106 997.823095 427.933044 997.730995 521.690981 997.730995z"  ></path>' +
    '' +
    '<path d="M644.972128 694.2764c-0.629351 26.934173-16.690591 58.698486-47.564603 84.220457-7.772228 6.426543-10.622216 18.865178-15.513756 28.653375-0.680518 1.361035-0.07675 3.356538-0.102333 5.055274-0.700984 47.702753-23.777185 76.658012-60.612122 76.064478-36.891221-0.593534-59.118053-28.914326-58.96967-77.394813 0.04605-14.874172-3.735172-24.662369-16.352891-33.990066-45.932384-33.944016-60.438155-96.766542-36.057203-148.670084 23.413901-49.84664 83.033388-79.881517 135.484415-68.256433C605.512337 573.313106 645.202378 621.629861 644.972128 694.2764zM624.408215 689.113676c-0.296767-53.305511-30.628412-93.52257-73.12239-105.823055-44.295048-12.822385-91.368451 4.53849-115.979653 42.770279-24.432119 37.955489-24.90797 89.812982 10.003098 119.489692 30.413511 25.854555 43.159147 51.581192 41.240394 90.166032-0.905651 18.164193 14.720672 29.779044 34.721751 29.947894 21.213731 0.179084 33.227682-11.4767 36.753071-31.452196 1.755019-9.946815 1.606636-20.435997 0.834018-30.567011-1.355919-17.765093 4.134273-29.67671 20.43088-39.695158C609.687543 745.248708 623.267196 715.607815 624.408215 689.113676z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M680.752 540.126c15.553 0 28.125-12.572 28.125-28.125 0-15.525-12.572-28.125-28.125-28.125L343.251 483.876c-15.525 0-28.125 12.6-28.125 28.125 0 15.553 12.6 28.125 28.125 28.125L680.752 540.126zM849.502 62 174.5 62C112.372 62 62 112.372 62 174.5l0 675.002c0 62.128 50.372 112.5 112.5 112.5l675.002 0c62.128 0 112.5-50.372 112.5-112.5L962.002 174.5C962.002 112.372 911.63 62 849.502 62zM905.752 849.502c0 31.05-25.2 56.25-56.25 56.25L174.5 905.752c-31.05 0-56.25-25.2-56.25-56.25L118.25 174.5c0-31.05 25.2-56.25 56.25-56.25l675.002 0c31.05 0 56.25 25.2 56.25 56.25L905.752 849.502z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duihao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.454 957.754c-246.501 0-447.036-200.536-447.036-447.025 0-246.495 200.535-447.036 447.036-447.036S958.49 264.235 958.49 510.729c0 246.489-200.536 447.025-447.036 447.025z m0-842.79c-218.223 0-395.764 177.542-395.764 395.764s177.541 395.75 395.764 395.75 395.764-177.527 395.764-395.75-177.54-395.764-395.764-395.764z" fill="" ></path>' +
    '' +
    '<path d="M438.475 684.84a25.62 25.62 0 0 1-18.126-7.518L271.888 528.854c-10.015-10-10.015-26.244 0-36.252 10.014-10.014 26.237-10.014 36.251 0L438.475 622.93l272.438-272.418c10.014-10.014 26.238-10.014 36.252 0 10.014 10.014 10.014 26.244 0 36.252L456.601 677.32a25.616 25.616 0 0 1-18.126 7.518z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)