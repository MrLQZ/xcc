var app      = getApp();

var pageData = {
  data: {"carousel1":{"type":"carousel","style":"height:482.8125rpx;margin-left:auto;margin-right:auto;margin-top:0;opacity:1;","content":[{"customFeature":{"action":"goods-trade","goods-id":"1018983","goods-name":"妈妈物语"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef16b51c4bd.jpg","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":0,"eventParams":"{\"goods_id\":\"1018983\",\"goods_type\":null}","eventHandler":"tapGoodsTradeHandler"},{"customFeature":{"action":"community","community-id":"516","community-name":" 妈妈派"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f6fb921bce4.jpg","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":1,"eventParams":"{\"community_id\":\"516\"}","eventHandler":"tapCommunityHandler"}],"customFeature":{"autoplay":true,"interval":2},"animations":[],"page_form":"","compId":"carousel1"},"free_vessel2":{"type":"free-vessel","style":"width:750rpx;height:93.75rpx;background-color:rgba(0, 0, 0, 0);margin-bottom:auto;margin-right:auto;margin-top:-93.75rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:70.3125rpx;width:637.5rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:56.25rpx;top:9.375rpx;right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef19333c814.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:93.75rpx;top:23.4375rpx;margin-right:0;","content":"开启你的美食之旅","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel2","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"page10009"},"animations":[],"page_form":"","compId":"free_vessel2","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel2","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10009\\\/page10009\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"album3":{"style":"background-color:rgb(250, 250, 250);color:rgb(102, 102, 102);font-size:23.4375rpx;opacity:1;text-align:center;margin-left:auto;","ul_style":"padding-left:72.65625rpx;padding-top:7.03125rpx;margin-left:auto;","html_mode":"sec-mode","li":[{"action":"inner-link","li_class":"album-pic router","pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef1b07817ed.jpg","title":"最新推荐","router":"page10006","li_style":"width:96.6796875rpx;margin-right:72.65625rpx;margin-bottom:7.03125rpx;margin-left:auto;","img_style":"height:93.75rpx;margin-left:auto;","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10006\\\/page10006\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"action":"inner-link","li_class":"album-pic router","pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef1b078974e.jpg","title":"热门菜谱","router":"page10007","li_style":"width:96.6796875rpx;margin-right:72.65625rpx;margin-bottom:7.03125rpx;margin-left:auto;","img_style":"height:93.75rpx;margin-left:auto;","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10007\\\/page10007\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"action":"inner-link","li_class":"album-pic router","pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef1b07907f3.jpg","title":"人气菜肴","router":"page10008","li_style":"width:96.6796875rpx;margin-right:72.65625rpx;margin-bottom:7.03125rpx;margin-left:auto;","img_style":"height:93.75rpx;margin-left:auto;","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10008\\\/page10008\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"action":"get-coupon","coupon-id":"214","li_class":"album-pic","pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef1b0876f3a.jpg","title":"优惠券","li_style":"width:96.6796875rpx;margin-right:72.65625rpx;margin-bottom:7.03125rpx;margin-left:auto;","img_style":"height:93.75rpx;margin-left:auto;","eventParams":"{\"coupon_id\":\"214\"}","eventHandler":"tapGetCouponHandler"}],"itemType":"album","itemParentType":null,"itemIndex":"album3","content":""},"title_ele4":{"type":"title-ele","style":"opacity:1;line-height:75rpx;background-color:rgb(250, 250, 250);border-color:rgb(34, 34, 34);border-style:none;color:#666;font-size:30.46875rpx;margin-left:auto;margin-right:auto;margin-top:23.4375rpx;","content":"积分菜品","customFeature":{"mode":3,"markColor":"rgb(255, 103, 103)","boxColor":"#000","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"title_ele4","parentCompid":"title_ele4","markColor":"rgb(255, 103, 103)","mode":3},"goods_list5":{"type":"goods-list","style":"background-color:rgb(243, 243, 243);margin-top:-18.75rpx;opacity:1;color:rgb(102, 102, 102);font-size:28.125rpx;height:auto;margin-left:auto;","content":"","customFeature":{"lineBackgroundColor":"rgb(250, 250, 250)","lineBackgroundImage":"","margin":0,"lineHeight":"212","imgWidth":"150","imgHeight":"150","vesselAutoheight":1,"height":"300px","form":"goods","mode":1,"name":"商品列表","ifUseContact":true,"isIntegral":true,"isShoppingCart":true,"id":"list-100677602924"},"animations":[],"page_form":"","compId":"goods_list5","parentCompid":"goods_list5","list_style":"background-color:rgb(250, 250, 250);height:496.875rpx;margin-left:auto;","img_style":"width:351.5625rpx;height:351.5625rpx;margin-left:auto;","title_width":{"width":"375rpx"},"param":"{\"id\":\"list-100677602924\",\"form\":\"goods\",\"goods_type\":0,\"page\":1,\"app_id\":\"djcDXcXgvb\",\"is_count\":0,\"is_integral\":1}"},"suspension6":{"type":"suspension","style":"opacity:1;color:#fff;font-size:46.875rpx;margin-left:auto;","content":[],"customFeature":{"margin":1,"lineBackgroundColor":"rgba(0,0,0,0.5)","appendComponent":{"service":true,"myOrder":true,"shoppingCart":true,"top":true}},"animations":[],"page_form":"","compId":"suspension6","list_style":"margin-bottom:2.34375rpx;background-color:rgba(0,0,0,0.5);margin-left:auto;","suspension_bottom":70},"has_tabbar":1,"page_hidden":true,"page_form":""},
    need_login: false,
    page_router: 'page10000',
    page_form: 'none',
      list_compids_params: [],
      goods_compids_params: [{"compid":"goods_list5","param":{"id":"list-100677602924","form":"goods","goods_type":0,"page":1,"app_id":"djcDXcXgvb","is_count":0,"is_integral":1}}],
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [],
      requesting: false,
  requestNum: 1,
  onLoad: function (e) {
    app.onPageLoad(e);
  },
  dataInitial: function () {
    app.pageDataInitial();
  },
  onShareAppMessage: function (e) {
    return app.onPageShareAppMessage(e);
  },
  onShow: function () {
    app.onPageShow();
  },
  onReachBottom: function () {
    app.onPageReachBottom();
  },
  onUnload: function () {
    app.onPageUnload();
  },
  tapPrevewPictureHandler: function (e) {
    app.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function () {
    app.suspensionBottom();
  },
  pageScrollFunc: function (e) {
    app.pageScrollFunc(e);
  },
  goodsScrollFunc: function (e) {
    app.goodsScrollFunc(e);
  },
  franchiseeScrollFunc: function (e) {
    app.franchiseeScrollFunc(e);
  },
  seckillScrollFunc: function (e) {
    app.seckillScrollFunc(e);
  },
  changeCount: function (e) {
    app.changeCount(e);
  },
  inputChange: function (e) {
    app.inputChange(e);
  },
  bindDateChange: function (e) {
    app.bindDateChange(e);
  },
  bindTimeChange: function (e) {
    app.bindTimeChange(e);
  },
  bindSelectChange: function (e) {
    app.bindSelectChange(e);
  },
  bindScoreChange: function (e) {
    app.bindScoreChange(e);
  },
  submitForm: function (e) {
    app.submitForm(e);
  },
  udpateVideoSrc: function (e) {
    app.udpateVideoSrc(e);
  },
  tapMapDetail: function (e) {
    app.tapMapDetail(e);
  },
  uploadFormImg: function (e) {
    app.uploadFormImg(e);
  },
  deleteUploadImg: function (e) {
    app.deleteUploadImg(e);
  },
  listVesselTurnToPage: function (e) {
    app.listVesselTurnToPage(e);
  },
  userCenterTurnToPage: function (e) {
    app.userCenterTurnToPage(e);
  },
  turnToGoodsDetail: function (e) {
    app.turnToGoodsDetail(e);
  },
  turnToFranchiseeDetail: function (e) {
    app.turnToFranchiseeDetail(e);
  },
  turnToSeckillDetail: function (e) {
    app.turnToSeckillDetail(e);
  },
  sortListFunc: function (e) {
    app.sortListFunc(e);
  },
  bbsInputComment: function (e) {
    app.bbsInputComment(e);
  },
  bbsInputReply: function (e) {
    app.bbsInputReply(e);
  },
  uploadBbsCommentImage: function (e) {
    app.uploadBbsCommentImage(e);
  },
  uploadBbsReplyImage: function (e) {
    app.uploadBbsReplyImage(e);
  },
  deleteCommentImage: function (e) {
    app.deleteCommentImage(e);
  },
  deleteReplyImage: function (e) {
    app.deleteReplyImage(e);
  },
  bbsPublishComment: function (e) {
    app.bbsPublishComment(e);
  },
  clickBbsReplyBtn: function (e) {
    app.clickBbsReplyBtn(e);
  },
  bbsPublishReply: function (e) {
    app.bbsPublishReply(e);
  },
  searchList: function (e) {
    app.searchList(e);
  },
  selectLocal: function (e) {
    app.selectLocal(e);
  },
  cancelCity: function (e) {
    app.cancelCity(e);
  },
  bindCityChange: function (e) {
    app.bindCityChange(e);
  },
  submitCity: function (e) {
    app.submitCity(e);
  },
  openTakeoutLocation: function (e) {
    app.openTakeoutLocation(e);
  },
  callTakeout: function (e) {
    app.callTakeout(e);
  },
  getMoreAssess: function (e) {
    app.getMoreAssess(e);
  },
  changeEvaluate: function (e) {
    app.changeEvaluate(e)
  },
  deleteAllCarts: function (e) {
    app.deleteAllCarts(e);
  },
  clickWaimaiCategory: function (e) {
    app.clickWaimaiCategory(e);
  },
  clickWaimaiMinus: function (e) {
    app.clickWaimaiMinus(e);
  },
  clickWaimaiPlus: function (e) {
    app.clickWaimaiPlus(e);
  },
  clickTakeoutMinus: function (e) {
    app.clickTakeoutMinus(e);
  },
  clickTakeoutPlus: function (e) {
    app.clickTakeoutPlus(e);
  },
  changeAssessType: function (e) {
    app.changeAssessType(e);
  },
  showShoppingCartPop: function (e) {
    app.showShoppingCartPop(e);
  },
  hideTakeoutShoppingCart: function (e) {
    app.hideTakeoutShoppingCart(e);
  },
  showTakeoutDetail: function (e) {
    app.showTakeoutDetail(e);
  },
  hideTakeoutDetailPop: function (e) {
    app.hideTakeoutDetailPop(e);
  },
  hideTakeoutModelPop: function (e) {
    app.hideTakeoutModelPop(e);
  },
  chooseTakeoutModel: function (e) {
    app.chooseTakeoutModel(e);
  },
  sureChooseModel: function (e) {
    app.sureChooseModel(e);
  },
  clickWaimaiChooseComplete: function (e) {
    app.clickWaimaiChooseComplete(e);
  },
  tapGoodsTradeHandler: function (e) {
    app.tapGoodsTradeHandler(e);
  },
  tapInnerLinkHandler: function (e) {
    app.tapInnerLinkHandler(e);
  },
  tapPhoneCallHandler: function (e) {
    app.tapPhoneCallHandler(e);
  },
  tapRefreshListHandler: function (e) {
    app.tapRefreshListHandler(e);
  },
  tapGetCouponHandler: function (e) {
    app.tapGetCouponHandler(e);
  },
  tapCommunityHandler: function (e) {
    app.tapCommunityHandler(e);
  },
  turnToCommunityPage: function (e) {
    app.turnToCommunityPage(e);
  },
  tapToFranchiseeHandler: function (e) {
    app.tapToFranchiseeHandler(e);
  },
  tapToTransferPageHandler: function () {
    app.tapToTransferPageHandler();
  },
  tapToSeckillHandler: function (e) {
    app.tapToSeckillHandler(e);
  },
  tapToCouponReceiveListHandler: function () {
    app.tapToCouponReceiveListHandler();
  },
  tapToRechargeHandler: function () {
    app.tapToRechargeHandler();
  },
  tapToXcx: function (e) {
    app.tapToXcx(e);
  },
  tapFranchiseeLocation: function (e) {
    app.tapFranchiseeLocation(e);
  },
  showAddShoppingcart: function (e) {
    app.showAddShoppingcart(e);
  },
  hideAddShoppingcart: function () {
    app.hideAddShoppingcart();
  },
  selectGoodsSubModel: function (e) {
    app.selectGoodsSubModel(e);
  },
  resetSelectCountPrice: function () {
    app.resetSelectCountPrice();
  },
  // 电商
  clickGoodsMinusButton: function (e) {
    app.clickGoodsMinusButton();
  },
  clickGoodsPlusButton: function (e) {
    app.clickGoodsPlusButton();
  },
  sureAddToShoppingCart: function () {
    app.sureAddToShoppingCart();
  },
  sureAddToBuyNow: function () {
    app.sureAddToBuyNow();
  },
  clickTostoreMinusButton: function (e) {
    app.clickTostoreMinusButton(e);
  },
  clickTostorePlusButton: function (e) {
    app.clickTostorePlusButton(e);
  },
  readyToPay: function () {
    app.readyToTostorePay();
  },
  getValidateTostore: function () {
    app.getValidateTostore();
  },
  goToShoppingCart: function () {
    app.goToShoppingCart();
  },
  getCartList: function () {
    app.getTostoreCartList();
  },
  stopPropagation: function () {
  },
  turnToSearchPage:function (e) {
    app.turnToSearchPage(e);
  },
  previewImage: function (e) {
    var dataset = e.currentTarget.dataset;
    app.previewImage({
      current : dataset.src,
      urls: dataset.previewImgarr,
    });
  },
  scrollPageTop: function () {
    app.pageScrollTo(0);
  },
  suspensionTurnToPage: function (e) {
    app.suspensionTurnToPage(e);
  },
  tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  keywordList:{},
  bindSearchTextChange: function (e) {
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
};
Page(pageData);
