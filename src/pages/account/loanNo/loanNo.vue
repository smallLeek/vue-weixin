<template>
  <!--月月盈和定投盈的合同模版-->
  <div class="container">
    <div class="title">
      <b @click="goBackOne()">
        <img src="../../../../static/images/goBack.png">
      </b>
      <span>合同模版</span>
    </div>

    <div class="loanNoContainer">
      <div class="loanHerd">
        <ul>
          <li class="fl" v-bind:class="{active: isActive}" v-on:click="activeThis('one')">合同模板1</li>
          <li class="fr" v-bind:class="{active: isTwoActive}" v-on:click="activeThis('two')">合同模板2</li>
        </ul>
      </div>
      <div class="line"></div>
      <ul class="loanContainer">
        <li class="loanCon" v-if="isActive">
          <div class="st_war">
            <div class="st_mainer">
              <div class="st_main">
                <h1 class="text_center">网络借贷协议</h1>
                <p class="text_center fw fontP">合同编号:</p>
                <div class="float" style="width:100%;">
                  <ol class="float w1000">
                    <li class="float">
                      <span class="fn_left num_list">1.出借人（以下简称甲方）：</span>
                      <p class="fn_left">姓名/名称：</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">2.借款人（以下简称乙方）: </span>
                      <p class="fn_left">姓名/名称：</p>
                    </li>
                    <li class="float">
                      <p class="fn_left ti">甲方同意向乙方提供约定借款，乙方承诺到按本合同约定还款付息（包含借款本金及利息）。</p>
                      <p class="fn_left ti">各方就上述借款事宜订立如下合同：</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第一条 定义</span>
                      <p class="fn_left ti">除非缔约方另有约定，本合同下列术语定义如下:</p>
                      <p class="fn_left ti">1.甲方：是指有合法来源的资金进行出借形成债权，获得一定回报的自然人或其他合法主体。</p>
                      <p class="fn_left ti">2.乙方：是指有资金需求及合法资金用途，承诺到期偿还债权（包含借款本金、利息、违约金、补偿金等）。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list mt10">第二条 借款基本信息</span>
                      <p class="tableP clearfix">
                        <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款金额（各出借人金额详见本合同附件一）</span>
                        <span style="text-align:center; width: 40%;float: right;">￥<b>**</b>万元整<br/>大写：人民币<b>**</b>万元整 </span>
                      </p>
                      <p class="tableP clearfix">
                        <span style="text-align:center;font-weight:bold; width: 60%; float: left;" class="w241">借款年利率</span>
                        <span style="text-align:center; width: 40%;float: right;"><b>**%</b></span>
                      </p>
                      <p class="tableP clearfix">
                        <span style="text-align:center;font-weight:bold; width: 60%; float: left;" class="w241">借款期限</span>
                        <span style="text-align:center; width: 40%;float: right;"><b>**个月</b></span>
                      </p>
                      <p class="tableP clearfix">
                        <span style="text-align:center;font-weight:bold; width: 60%; float: left;" class="w241">借款用途</span>
                        <span style="text-align:center; width: 40%;float: right;"><b>*******</b></span>
                      </p>
                      <p class="tableP clearfix">
                        <span style="text-align:center;font-weight:bold; width: 60%; float: left;">还款方式</span>
                        <span style="text-align:center; width: 40%;float: right;"><b>*****</b></span>
                      </p>
                      <p class="tableP clearfix">
                        <span style="text-align:center;font-weight:bold; width: 60%; float: left; border-bottom: 0.05px solid #5a5a5a;">还款金额</span>
                        <span style="text-align:center; width: 40%;float: right;border-bottom: 0.05px solid #5a5a5a;"> <b>￥***元</b></span>
                      </p>
                      <p class="fn_left">详细内容与本次所出借项目描述一致</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list fontt">第三条 各方权利及义务</span>
                      <span class="fn_left num_list">（一）甲方的权利及义务</span>
                      <p class="fn_left ti">1.承诺提供的信息真实有效，借款资金的来源合法，自愿向乙方进行出借形成债权。</p>
                      <p class="fn_left ti">2.保证通过金梧桐开通的存（托）管账户状态正常，确保资金划入、划出交易的完成。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">（二）乙方的权利及义务</span>
                      <p class="fn_left ti">1.承诺提供的信息真实有效，不得隐瞒任何影响或可能影响其资信能力的事项。</p>
                      <p class="fn_left ti">2.承诺接受借款后不得改变资金用途且保证资金使用合法合规，保证甲方的债权不受侵害，并按约定还款方式及还款计划偿还甲方的借款本息。</p>
                      <p class="fn_left ti">3.乙方有权提前还款，但应按照本合同第四条第一款的约定对甲方进行补偿。</p>
                      <p class="fn_left ti">4.在借款期限届满前1天内将足额资金划入通过金梧桐开通的存（托）管账户，并同意扣收到期的本息等债务。</p>
                      <p class="fn_left ti">5.应保证通过金梧桐开通的存（托）管账户状态正常，确保资金划入、划出交易的完成。</p>
                      <p class="fn_left ti">6.同意按照与甲方签署的《网络借贷服务协议》的内容，在借贷撮合成功时，授权金梧桐（由北京普惠通数据信息技术有限公司负责运营）按年化  %从借款本金中划扣服务费。</p>
                      <p class="fn_left ti">7.乙方申请的借款项目，应按照借款总额提取<b>%</b>以上的风险互助金，并划转至专用账户中。若乙方到期按时还本付息，风险互助金将自动退还乙方。</p>
                      <!-- <p class="fn_left ti">8.乙方申请的借款项目，应按照借款总额提取<b>%</b>以上的风险互助金，并划转至保证人丙方的专用账户中。若乙方到期按时还本付息，风险互助金将自动退还乙方。</p> -->
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第四条 提前还款及违约责任</span>
                      <p class="fn_left ti">1.乙方提前还款的，应按合同订立时约定的借款利率及资金的实际占用时间计付利息，并另行支付相当于一个月利息的金额作为补偿金。</p>
                      <p class="fn_left ti">2.乙方未能按照本合同约定的还款方式及还款计划履行偿还义务的，应向甲方支付违约金[违约金＝未履行金额（包括本金及利息）×未履行天数×借款日利率×50%]，直至清偿为止。</p>
                      <!-- <p class="fn_left ti">3.乙方在借款期满未还款的，丙方需按照本合同约定向甲方代偿相关款项。丙方代偿后有权向乙方追偿的债权范围包括但不限于：丙方已代偿的金额、逾期利息、按照双方约定的其他违约金、因追偿产生的各项费用等（包括但不限于诉讼费、仲裁费、财产保全费、财产保全担保费、差旅费、通讯费、执行费、评估费、拍卖费、公证费、送达费、公告费、律师代理费）。</p> -->
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第五条 各方约定的其他事项</span>
                      <p class="fn_left ti">1.合同各方负有对其他方提供的信息及本合同内容保密的义务，未经其他方同意，任何一方不得向合同主体之外的任何人披露，但法律、法规另有规定或本合同另有约定的除外。</p>
                      <p class="fn_left ti">2.合同各方应按照法律规定自行处理税收问题。</p>
                      <p class="fn_left ti">3.本合同生效后借款资金支用前，除不可抗力外，若出现其他不可归责于乙方原因导致合同不能履行的，乙方不承担违约责任，出借资金不计息返还甲方，本合同提前终止。</p>
                      <p class="fn_left ti">4.本合同为电子版合同，与纸质版合同具有同等法律效力。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第六条 法律的适用和争议的解决</span>
                      <p class="fn_left ti">合同履行中发生争议，可由各方协商解决，协商不成可向金梧桐运营方所在地仲裁委员会申请仲裁。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第七条 合同生效</span>
                      <p class="fn_left ti">本合同签订之日起生效。</p>
                    </li>

                    <li>
                      <span class="fn_left ti">（本页为签署页，无正文）</span>
                      <p class="fn_left ti">签约提示</p>
                      <p class="fn_left ti">合同各方注意对本合同各项条款作全面、准确的理解。签约各方对本合同条款的含义认识一致。</p>
                    </li>
                  </ol>

                </div>
                <ul class="sss_ul float w1000 mt16">
                  <li><span class="float">出借人：</span><span class="fr">法定代表人或授权代理人：</span></li>
                  <li><span class="float">（公章或合同专用章）</span><span class="fr">（签字或盖章）</span></li>
                  <li><span class="float">     年     月      日</span><span class="fr"></span></li>
                </ul>
                <ul class="sss_ul float w1000 mt16">
                  <li><span class="float">借款人：</span><span class="fr">法定代表人或授权代理人：</span></li>
                  <li><span class="float">（公章或合同专用章）</span><span class="fr">（签字或盖章）</span></li>
                  <li><span class="float">     年     月      日</span><span class="fr"></span></li>
                </ul>

              </div>

            </div>
          </div>


          <div class="st_war">
            <div class="st_mainer">
              <div class="st_main">
                <h1 class="text_center">网络借贷服务协议</h1>
                <p class="text_center fw fontP" >协议编号:</p>
                <div class="float"  style="width:100%;">
                  <ol class="float w1000">
                    <li class="float">
                      <span class="fn_left num_list">1.出借人（以下简称甲方）：</span>
                      <p class="fn_left">姓名/名称：</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">2.借款人（以下简称乙方）: </span>
                      <p class="fn_left">姓名/名称：</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">3.网站服务人（以下简称丙方）：</span>
                      <p class="fn_left">北京普惠通数据信息技术有限公司</p>
                      <p class="fn_left ti">甲方、乙方均在丙方的网站（以下简称金梧桐平台）上合法注册的主体。甲方作为出借人，同意接受丙方的资金出借撮合服务，并同意按照本协议及《网络借贷协议》约定的服务方式，选择向丙方推荐的出借人提供借款；乙方作为出借人，同意丙方的资金借款撮合服务，并同意按照本协议及《网络借贷协议》约定的服务方式履行相应的义务。</p>
                      <p class="fn_left ti">各方就上述事宜订立如下协议：</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第一条 定义</span>
                      <p class="fn_left ti">除非缔约方另有约定，本协议下列术语定义如下:</p>
                      <p class="fn_left ti">1.甲方：是指在金梧桐平台注册并同意相关服务协议，有合法来源的资金通过金梧桐平台进行借款形成债权，获得一定回报的自然人或其他合法主体。</p>
                      <p class="fn_left ti">2.乙方：是指在金梧桐平台注册并同意相关服务协议，有资金需求及合法资金用途，承诺到期偿还债权（包含借款本金、利息、违约金、补偿金等，下同）的自然人或其他合法主体。</p>
                      <p class="fn_left ti">3.丙方：是指为出借人、借款人之间订立并履行本协议提供居间信息服务的网站服务人。</p>
                      <p class="fn_left ti">4.募集期：是指乙方在金梧桐平台发布资金需求时所设定的筹资时间段。甲方资金在募集期至本协议生效期间不计利息。但丙方将为甲方向资金存（托）管机构争取收益补偿。</p>
                      <p class="fn_left ti">5.存（托）管方：是指获得相关资质的、为金梧桐平台提供资金存（托）管服务的支付机构或银行。所有金梧桐平台的服务接受方资金均存（托）管在支付方开设的存（托）管账户内，并由支付方完成所有资金清结算。</p>
                      <p class="fn_left ti">6.存（托）管账户：指协议各方在资金存（托）管方开立的账户。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list mt10">第二条 借款基本信息</span>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款金额（各出借人金额详见本合同附件一）</span>
                          <span style="text-align:center; width: 40%;float: right;">￥<b>**</b>万元整<br/>大写：人民币<b>**</b>元整 </span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款年利率</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>**%</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">平台服务费（年化）</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>**%</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款期限</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>**个月</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款用途</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>*******</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">还款方式</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>*****</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;border-bottom: 0.05px solid #5a5a5a;">还款金额</span>
                          <span style="text-align:center; width: 40%;float: right;border-bottom: 0.05px solid #5a5a5a;"> <b>￥***元</b></span>
                        </p>
                      <p class="fn_left">以《网络借贷协议》为准</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list fontt">第三条 各方权利及义务</span>
                      <span class="fn_left num_list">（一）甲方的权利及义务</span>
                      <p class="fn_left ti">1.甲方拥有参考丙方推荐后最终决定出借资金给特定借款人的权利。</p>
                      <p class="fn_left ti">2.对于丙方基于推荐出借的需要而提供给甲方的借款人的个人证件及其他相关信用信息，甲方应仅用于出借参考，不得向任何乙方、丙方以外的第三方透露；甲方应对借款人的信用信息及乙方、丙方的业务内容保密。如甲方擅自、不恰当地向他人透露借款人的信用信息或乙方、丙方的商业秘密，由此造成借款人或乙方、丙方的损失，甲方须承担全部责任。</p>
                      <p class="fn_left ti">3.甲方保证其出借资金来源的合法性，甲方是该出借资金的合法所有人。如第三人对该出借资金归属、合法性问题发生争议，甲方须承担由此而造成的全部后果。</p>
                      <p class="fn_left ti">4.甲方应根据本协议支付或者同意并委托丙方划扣甲方通过金梧桐开通的存（托）管账户相应出借资金，以完成出借行为。</p>
                      <p class="fn_left ti">5.若甲方需要变更银行账号、电话等账户信息，需及时在金梧桐上完成变更，因甲方未及时变更而导致的损失，概由甲方自行承担。</p>
                      <p class="fn_left ti">6.甲方需要承担金梧桐平台上的充值、提现业务的手续费，具体费用参照资金存管银行和第三方支付渠道收费标准。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">（二）乙方的权利及义务</span>
                      <p class="fn_left ti">1.乙方申请的借款项目，应按照借款总额提取<b>%</b>以上的风险互助金，该互助金授权丙方从借款本金中划转至专用账户中。</p>
                      <p class="fn_left ti">2.乙方在金梧桐平台上的充值、提现等因支付渠道及存管机构所产生的费用，均由乙方承担。若是通过丙方进行代充值业务，则手续费由丙方代为收取。</p>
                      <p class="fn_left ti">3.按照监管规则规定，乙方承诺在所有网络借贷信息平台上借款总余额未超过500万元（若乙方为自然人则不超过100万元）。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">（三）丙方的权利及义务</span>
                      <p class="fn_left ti">1.丙方应恪尽职守，按照守信、谨慎、有效管理的原则为甲乙方进行服务。</p>
                      <p class="fn_left ti">2.丙方有义务对甲方、乙方的资格进行形式审查。</p>
                      <p class="fn_left ti">3.除公开披露的必要信息外，丙方须对甲乙方的信息、资产情况及其他服务相关事务的具体情况和资料依法保密。当其中一方出现违约时，丙方有义务通过网站等形式向包括但不限于守约方披露违约方的相关信息，并积极协助守约方维护自身权益。</p>
                      <p class="fn_left ti">4.在甲方与借款人借贷关系存续期间，如借款人发生违约行为，丙方应及时提醒和督促借款人履行还款义务。</p>
                      <p class="fn_left ti">5.丙方为甲方提供资金出借相关服务，包括推荐借款人、促成交易和回款管理等服务。</p>
                      <p class="fn_left ti">6.丙方为乙方提供资金融入相关服务，包括借款信息发布、促成交易和账户管理等服务。</p>
                      <p class="fn_left ti">7.丙方有权收取乙方一定平台服务费，平台服务费费率年化  %，由乙方授权丙方在乙方的借款本金中直接划转。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第四条 违约责任</span>
                      <p class="fn_left ti">1.乙方在借款期满未还款的，丙方应积极协助甲方追讨相应的出借本息。</p>
                      <p class="fn_left ti">2.丙方未全面履行本协议约定的义务，或因系统的不稳定性造成信息泄漏而给甲方、乙方造成损失的，应当承担相应的责任。</p>
                      <p class="fn_left ti">3.任何一方违反本协议的约定，均应承担违约责任，赔偿守约方因此遭受的损失；如多方违约，应根据实际情况按比例承担相应的责任。违约方应赔偿因其违约而造成守约方的损失，包括但不限于可期待利益、仲裁费用及合理的律师费用等，但不得超过违约方订立本协议时可以预见或应当预见的因违反本协议可能造成的损失。</p>
                    </li>

                    <li class="float">
                      <span class="fn_left num_list">第五条 各方约定的其他事项</span>
                      <p class="fn_left ti">1.各方授予金梧桐向合作银行及其他机构查询并获取其真实身份及协议项下交易信息（不含密码）的权利。</p>
                      <p class="fn_left ti">2.本协议项下的收、付交易等数据信息均以金梧桐生成并公布的内容为准。甲方、乙方可以登录金梧桐平台网站查阅前述数据信息。</p>
                      <p class="fn_left ti">3.协议各方负有对其他方提供的信息及本协议内容保密的义务，未经其他方同意，任何一方不得向协议主体之外的任何人披露，但法律、法规另有规定或本协议另有约定的除外。</p>
                      <p class="fn_left ti">4.本协议在金梧桐平台保留存档。各方同意：因履行本协议有争议的，以金梧桐平台所保留的协议文件版本及网站披露信息为准。</p>
                      <p class="fn_left ti">5.甲方、乙方及丙方应确保在金梧桐平台登记的邮件、手机等联系方式正确与通畅。金梧桐平台向各方登记联系方式发送的通知及信息，即视为通知送达。因操作不当或疏于查收信息，造成的损失由其自行承担。</p>
                      <p class="fn_left ti">6.协议各方应按照法律规定自行处理税收问题。</p>
                      <p class="fn_left ti">7.项目一旦发出，除募集未成功外，甲方不得撤资，同时委托金梧桐平台向支付方发出指令将资金划至乙方在支付方的资金存（托）管账户，具体划转时间以金梧桐平台发布的信息为准。</p>
                      <p class="fn_left ti">8.本协议生效后借款资金支用前，除不可抗力外，若出现其他不可归责于乙方原因导致协议不能履行的，乙方不承担违约责任，出借资金不计息返还甲方，本协议提前终止。</p>
                      <p class="fn_left ti">9.本合同为电子版合同，与纸质版合同具有同等法律效力。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第六条 法律的适用和争议的解决</span>
                      <p class="fn_left ti">1.《北京普惠通数据信息技术有限公司网站注册服务协议》、《风险揭示书》等为本协议的组成部分，与本协议具同等法律效力。若前述规则及协议与本协议不一致的，以本协议为准。</p>
                      <p class="fn_left ti">2.协议履行中发生争议，可由各方协商解决，协商不成可向丙方所在地仲裁委员会申请仲裁。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第七条 协议生效</span>
                      <p class="fn_left ti">1.本协议签订之日起生效。</p>
                      <p class="fn_left ti">2.募集资金不成功则视为本次借款失败，本协议不生效，甲方的出借资金立即无息退回。</p>
                    </li>

                    <li>
                      <span class="fn_left ti">（本页为签署页，无正文）</span>
                      <p class="fn_left ti">签约提示</p>
                      <p class="fn_left ti">协议各方注意对本协议各项条款作全面、准确的理解。签约各方对本协议条款的含义认识一致。</p>
                    </li>
                  </ol>

                </div>
                <ul class="sss_ul float w1000 mt16">
                  <li><span class="float">出借人：</span><span class="fr">法定代表人或授权代理人：</span></li>
                  <li><span class="float">（公章或协议专用章）</span><span class="fr">（签字或盖章）</span></li>
                  <li><span class="float">     年     月      日</span><span class="fr"></span></li>
                </ul>
                <ul class="sss_ul float w1000 mt16">
                  <li><span class="float">借款人：</span><span class="fr">法定代表人或授权代理人：</span></li>
                  <li><span class="float">（公章或协议专用章）</span><span class="fr">（签字或盖章）</span></li>
                  <li><span class="float">     年     月      日</span><span class="fr"></span></li>
                </ul>
                <ul class="sss_ul float w1000 mt16">
                  <li><span class="float">网站服务人：</span><span class="fr">法定代表人或授权代理人：</span></li>
                  <li><span class="float">（公章或协议专用章）</span><span class="fr">（签字或盖章）</span></li>
                  <li><span class="float">     年     月      日</span><span class="fr"></span></li>
                </ul>
              </div>

<<<<<<< HEAD

            </div>
          </div>
        </li>
        <li class='loanCon' v-else>
          <div class="st_war">
            <div class="st_mainer">
              <div class="st_main">
                <h1 class="text_center">网络借贷及保证协议</h1>
                <p class="text_center fw fontP">合同编号:</p>
                <div class="float" style="width:100%;">
                  <ol class="float w1000">
                    <li class="float">
                      <span class="fn_left num_list">1.出借人（以下简称甲方）：</span>
                      <p class="fn_left">姓名/名称：</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">2.借款人（以下简称乙方）: </span>
                      <p class="fn_left">姓名/名称：</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">3.保证人（以下简称丙方）：</span>
                      <p class="fn_left">姓名/名称：</p>
                    </li>
                    <li class="float">
                      <p class="fn_left ti">甲方同意向乙方提供约定借款，乙方承诺到按本合同约定还款付息（包含借款本金及利息），同时丙方为乙方向甲方偿还借款本金及利息提供连带责任担保。</p>
                      <p class="fn_left ti">各方就上述借款及保证事宜订立如下合同：</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第一条 定义</span>
                      <p class="fn_left ti">除非缔约方另有约定，本合同下列术语定义如下:</p>
                      <p class="fn_left ti">1.甲方：是指有合法来源的资金进行出借形成债权，获得一定回报的自然人或其他合法主体。</p>
                      <p class="fn_left ti">2.乙方：是指有资金需求及合法资金用途，承诺到期偿还债权（包含借款本金、利息、违约金、补偿金等），并获得丙方连带责任担保的自然人或其他合法主体。</p>
                      <p class="fn_left ti">3.丙方：是指为乙方提供连带责任担保的保证人。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list mt10">第二条 借款基本信息</span>
                      <!--  <span class="fn_left num_list mt5">（一）基本信息</span> -->
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款金额（各出借人金额详见本合同附件一）</span>
                          <span style="text-align:center; width: 40%;float: right;">￥<b>**</b>万元整<br/>大写：人民币<b>**</b>万元整 </span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款年利率</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>**%</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款期限</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>**个月</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款用途</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>*******</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">还款方式</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>*****</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left; border-bottom: 0.05px solid #5a5a5a;">还款金额</span>
                          <span style="text-align:center; width: 40%;float: right; border-bottom: 0.05px solid #5a5a5a;"> <b>￥***元</b></span>
                        </p>
                      <p class="fn_left">详细内容与本次所出借项目描述一致</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list fontt">第三条 各方权利及义务</span>
                      <span class="fn_left num_list">（一）甲方的权利及义务</span>
                      <p class="fn_left ti">1.承诺提供的信息真实有效，借款资金的来源合法，自愿向乙方进行出借形成债权。</p>
                      <p class="fn_left ti">2.保证通过金梧桐开通的存（托）管账户状态正常，确保资金划入、划出交易的完成。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">（二）乙方的权利及义务</span>
                      <p class="fn_left ti">1.承诺提供的信息真实有效，不得隐瞒任何影响或可能影响其资信能力的事项。</p>
                      <p class="fn_left ti">2.承诺接受借款后不得改变资金用途且保证资金使用合法合规，保证甲方的债权不受侵害，并按约定还款方式及还款计划偿还甲方的借款本息。</p>
                      <p class="fn_left ti">3.乙方有权提前还款，但应按照本合同第四条第一款的约定对甲方进行补偿。</p>
                      <p class="fn_left ti">4.在借款期限届满前1天内将足额资金划入通过金梧桐开通的存（托）管账户，并同意扣收到期的本息等债务。</p>
                      <p class="fn_left ti">5.应保证通过金梧桐开通的存（托）管账户状态正常，确保资金划入、划出交易的完成。</p>
                      <p class="fn_left ti">6.乙方同意，一旦丙方将资金划至其支付方账户用于代偿借款本金及利息的，丙方即享有向乙方追偿全部兑付资金的权利，乙方对此予以认可，且不存在任何异议，并承诺自丙方兑付之后，自愿承担以丙方兑付的全部款项为基数，自兑付之日起以银行同期贷款利率的四倍计算逾期利息。</p>
                      <p class="fn_left ti">7.同意按照与甲方签署的《网络借贷服务协议》的内容，在借贷撮合成功时，授权金梧桐（由北京普惠通数据信息技术有限公司负责运营）按年化<b>%</b>从借款本金中划扣服务费。</p>
                      <p class="fn_left ti">8.乙方申请的借款项目，应按照借款总额提取<b>%</b>以上的风险互助金，并划转至保证人丙方的专用账户中。若乙方到期按时还本付息，风险互助金将自动退还乙方。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">（三）丙方的权利及义务</span>
                      <p class="fn_left ti">1.承诺提供的信息真实有效。</p>
                      <p class="fn_left ti">2.督促乙方按时、足额、无条件偿还甲方的债权。</p>
                      <p class="fn_left ti">3.在乙方未按照本合同第三条第（二）款第 4 项的规定履行偿还义务时，应向甲方足额代偿。</p>
                      <p class="fn_left ti">4.保证期间为本合同项下借款期限届满之日起两年。</p>
                      <p class="fn_left ti">5.丙方保证的范围包括本合同项下的本金、利息及违约金。</p>
                      <p class="fn_left ti">6.丙方在承担保证责任后，有权向乙方追偿。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第四条 提前还款及违约责任</span>
                      <p class="fn_left ti">1.乙方提前还款的，应按合同订立时约定的借款利率及资金的实际占用时间计付利息，并另行支付相当于一个月利息的金额作为补偿金。</p>
                      <p class="fn_left ti">2.乙方未能按照本合同约定的还款方式及还款计划履行偿还义务的，应向甲方支付违约金[违约金＝未履行金额（包括本金及利息）×未履行天数×借款日利率×50%]，直至清偿为止。</p>
                      <p class="fn_left ti">3.乙方在借款期满未还款的，丙方需按照本合同约定向甲方代偿相关款项。丙方代偿后有权向乙方追偿的债权范围包括但不限于：丙方已代偿的金额、逾期利息、按照双方约定的其他违约金、因追偿产生的各项费用等（包括但不限于诉讼费、仲裁费、财产保全费、财产保全担保费、差旅费、通讯费、执行费、评估费、拍卖费、公证费、送达费、公告费、律师代理费）。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第五条 各方约定的其他事项</span>
                      <p class="fn_left ti">1.合同各方负有对其他方提供的信息及本合同内容保密的义务，未经其他方同意，任何一方不得向合同主体之外的任何人披露，但法律、法规另有规定或本合同另有约定的除外。</p>
                      <p class="fn_left ti">2.合同各方应按照法律规定自行处理税收问题。</p>
                      <p class="fn_left ti">3.本合同生效后借款资金支用前，除不可抗力外，若出现其他不可归责于乙方原因导致合同不能履行的，乙方不承担违约责任，出借资金不计息返还甲方，本合同提前终止。</p>
                      <p class="fn_left ti">4.本合同为电子版合同，与纸质版合同具有同等法律效力。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第六条 法律的适用和争议的解决</span>
                      <p class="fn_left ti">合同履行中发生争议，可由各方协商解决，协商不成可向金梧桐运营方所在地仲裁委员会申请仲裁。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第七条 合同生效</span>
                      <p class="fn_left ti">本合同签订之日起生效。</p>
                    </li>

                    <li>
                      <span class="fn_left ti">（本页为签署页，无正文）</span>
                      <p class="fn_left ti">签约提示</p>
                      <p class="fn_left ti">合同各方注意对本合同各项条款作全面、准确的理解。签约各方对本合同条款的含义认识一致。</p>
                    </li>
                  </ol>

                </div>
                <ul class="sss_ul float w1000 mt16">
                  <li><span class="float">出借人：</span><span class="fr">法定代表人或授权代理人：</span></li>
                  <li><span class="float">（公章或合同专用章）</span><span class="fr">（签字或盖章）</span></li>
                  <li><span class="float">     年     月      日</span><span class="fr"></span></li>
                </ul>
                <ul class="sss_ul float w1000 mt16">
                  <li><span class="float">借款人：</span><span class="fr">法定代表人或授权代理人：</span></li>
                  <li><span class="float">（公章或合同专用章）</span><span class="fr">（签字或盖章）</span></li>
                  <li><span class="float">     年     月      日</span><span class="fr"></span></li>
                </ul>
                <ul class="sss_ul float w1000 mt16">
                  <li><span class="float">保证人：</span><span class="fr">法定代表人或授权代理人：</span></li>
                  <li><span class="float">（公章或合同专用章）</span><span class="fr">（签字或盖章）</span></li>
                  <li><span class="float">     年     月      日</span><span class="fr"></span></li>
                </ul>
              </div>


            </div>
          </div>

          <div class="st_war">
            <div class="st_mainer">
              <div class="st_main">
                <h1 class="text_center">网络借贷服务协议</h1>
                <p class="text_center fw" style="width:60%;float:right;">协议编号:</p>
                <div class="float" style="width:100%;">
                  <ol class="float w1000">
                    <li class="float">
                      <span class="fn_left num_list">1.出借人（以下简称甲方）：</span>
                      <p class="fn_left">姓名/名称：</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">2.借款人（以下简称乙方）: </span>
                      <p class="fn_left">姓名/名称：</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">3.保证人（以下简称丙方）：</span>
                      <p class="fn_left">姓名/名称：</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">4.网站服务人（以下简称丙方）：</span>
                      <p class="fn_left">北京普惠通数据信息技术有限公司</p>
                      <p class="fn_left ti">甲方、乙方及丙方均在丁方的网站（以下简称金梧桐平台）上合法注册的主体。甲方作为出借人，同意接受丁方的资金出借撮合服务，并同意按照本协议及《网络借贷及保证协议》约定的服务方式，选择向丁方推荐的出借人提供借款；乙方作为出借人，同意丁方的资金借款撮合服务，并同意按照本协议及《网络借贷及保证协议》约定的服务方式履行相应的义务；丙方作为保证人，同意按照本协议及《网络借贷及保证协议》约定的服务方式履行相应的义务。</p>
                      <p class="fn_left ti">各方就上述事宜订立如下协议：</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第一条 定义</span>
                      <p class="fn_left ti">除非缔约方另有约定，本协议下列术语定义如下:</p>
                      <p class="fn_left ti">1.甲方：是指在金梧桐平台注册并同意相关服务协议，有合法来源的资金通过金梧桐平台进行借款形成债权，获得一定回报的自然人或其他合法主体。</p>
                      <p class="fn_left ti">2.乙方：是指在金梧桐平台注册并同意相关服务协议，有资金需求及合法资金用途，承诺到期偿还债权（包含借款本金、利息、违约金、补偿金等，下同），并获得丙方连带责任担保的自然人或其他合法主体。</p>
                      <p class="fn_left ti">3.丙方：是指在金梧桐平台注册并同意相关服务协议，并为乙方提供连带责任担保的保证人。</p>
                      <p class="fn_left ti">4.丁方：是指为出借人、借款人、保证人之间订立并履行本协议提供居间信息服务的网站服务人。</p>
                      <p class="fn_left ti">5.募集期：是指乙方在金梧桐平台发布资金需求时所设定的筹资时间段。甲方资金在募集期至本协议生效期间不计利息。但丁方将为甲方向资金存（托）管机构争取收益补偿。</p>
                      <p class="fn_left ti">6.存（托）管方：是指获得相关资质的、为金梧桐平台提供资金存（托）管服务的支付机构或具有资金存管资质的银行。所有金梧桐平台的服务接受方资金存（托）管在支付方开设的存（托）管账户内，并由支付方完成所有资金清结算。</p>
                      <p class="fn_left ti">7.存（托）管账户：指协议各方在资金存（托）管方开立的账户。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list mt10">第二条 借款基本信息</span>
                      <!--  <span class="fn_left num_list mt5">（一）基本信息</span> -->
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款金额（各出借人金额详见本合同附件一）</span>
                          <span style="text-align:center; width: 40%;float: right;">￥<b>**</b>万元整<br/>大写：人民币<b>**</b>万元整 </span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款年利率</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>**%</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">平台服务费（年化）</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>**%</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款期限</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>**个月</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">借款用途</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>*******</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;">还款方式</span>
                          <span style="text-align:center; width: 40%;float: right;"><b>*****</b></span>
                        </p>
                        <p class="tableP clearfix">
                          <span style="text-align:center;font-weight:bold; width: 60%; float: left;border-bottom: 0.05px solid #5a5a5a;">还款金额</span>
                          <span style="text-align:center; width: 40%;float: right;border-bottom: 0.05px solid #5a5a5a;"> <b>￥***元</b></span>
                        </p>
                      <p class="fn_left">以《网络借贷及保证协议》为准</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list fontt">第三条 各方权利及义务</span>
                      <span class="fn_left num_list">（一）甲方的权利及义务</span>
                      <p class="fn_left ti">1.甲方拥有参考丙方推荐后最终决定出借资金给特定借款人的权利。</p>
                      <p class="fn_left ti">2.对于丁方基于推荐出借的需要而提供给甲方的借款人的个人证件及其他相关信用信息，甲方应仅用于出借参考，不得向任何乙方、丙方以及丁方以外的第四方透露；甲方应对借款人的信用信息及乙方、丙方以及丁方的业务内容保密。如甲方擅自、不恰当地向他人透露借款人的信用信息或乙方、丙方以及丁方的商业秘密，由此造成借款人或乙方、丙方及丁方的损失，甲方须承担全部责任。</p>
                      <p class="fn_left ti">3.甲方保证其出借资金来源的合法性，甲方是该出借资金的合法所有人。如第三人对该出借资金归属、合法性问题发生争议，甲方须承担由此而造成的全部后果。</p>
                      <p class="fn_left ti">4.甲方应根据本协议支付或者同意并委托丁方划扣甲方通过金梧桐开通的存（托）管账户相应出借资金，以完成出借行为。</p>
                      <p class="fn_left ti">5.若甲方需要变更银行账号、电话等账户信息，需及时在金梧桐上完成变更，因甲方未及时变更而导致的损失，概由甲方自行承担。</p>
                      <p class="fn_left ti">6.甲方需要承担金梧桐平台上的充值、提现业务的手续费，具体费用参照资金存管银行和第三方支付渠道收费标准。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">（二）乙方的权利及义务</span>
                      <p class="fn_left ti">1.乙方申请的借款项目，应按照借款总额提取<b>%</b>以上的风险互助金，该互助金授权丁方从借款本金中划转至保证人丙方的专用账户中。</p>
                      <p class="fn_left ti">2.按照监管规则规定，乙方承诺在所有网络借贷信息平台上借款总余额未超过500万元（若乙方为自然人则不超过100万元）。</p>
                      <p class="fn_left ti">3.乙方需要承担金梧桐平台上的充值、提现业务的手续费，具体费用参照资金存管银行和第三方支付渠道收费标准。若是通过丁方进行代充值业务，则手续费由丁方代为收取。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">（三）丙方的权利及义务</span>
                      <p class="fn_left ti">1.丙方通过金梧桐的存（托）管机构开设专用账户，将收取乙方的风险互助金资金存在该账户内，并授权丁方对此账户进行监督。</p>
                      <p class="fn_left ti">2.丙方根据担保总额度按比例加入金梧桐联保体系，并授权丁方统一统筹安排。</p>
                      <p class="fn_left ti">3.丙方需要承担金梧桐平台上的充值、提现业务的手续费，具体费用参照资金存管银行和第三方支付渠道收费标准。若是通过丁方进行代充值业务，则手续费由丁方代为收取。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">（四）丁方的权利及义务</span>
                      <p class="fn_left ti">1.丁方应恪尽职守，按照守信、谨慎、有效管理的原则为甲乙丙方进行服务。</p>
                      <p class="fn_left ti">2.丁方有义务对甲方、乙方、丙方的资格进行形式审查。</p>
                      <p class="fn_left ti">3.除公开披露的必要信息外，丁方须对甲乙丙方的信息、资产情况及其他服务相关事务的具体情况和资料依法保密。当其中一方出现违约时，丁方有义务通过网站等形式向包括但不限于守约方披露违约方的相关信息，并积极协助守约方维护自身权益。</p>
                      <p class="fn_left ti">4.在甲方与借款人借贷关系存续期间，如借款人发生违约行为，丁方应及时提醒和督促借款人、保证人履行还款义务。</p>
                      <p class="fn_left ti">5.丁方为甲方提供资金出借相关服务，包括推荐借款人、促成交易和回款管理等服务。</p>
                      <p class="fn_left ti">6.丁方为乙方提供资金融入相关服务，包括借款信息发布、促成交易和账户管理等服务。</p>
                      <p class="fn_left ti">7.丁方有权收取乙方一定平台服务费，平台服务费费率年化<b>%</b>，由乙方授权丁方在乙方的借款本金中直接划转。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第四条 违约责任</span>
                      <p class="fn_left ti">1.乙方在借款期满未还款的，丙方亦未按照协议约定向甲方代偿的，丁方应积极协助甲方追讨相应的出借本息。</p>
                      <p class="fn_left ti">2.丁方未全面履行本协议约定的义务，或因系统的不稳定性造成信息泄漏而给甲方、乙方或丙方造成损失的，应当承担相应的责任。</p>
                      <p class="fn_left ti">3.任何一方违反本协议的约定，均应承担违约责任，赔偿守约方因此遭受的损失；如多方违约，应根据实际情况按比例承担相应的责任。违约方应赔偿因其违约而造成守约方的损失，包括但不限于可期待利益、仲裁费用及合理的律师费用等，但不得超过违约方订立本协议时可以预见或应当预见的因违反本协议可能造成的损失。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第五条 各方约定的其他事项</span>
                      <p class="fn_left ti">1.各方授予金梧桐向合作银行及其他机构查询并获取其真实身份及协议项下交易信息（不含密码）的权利。</p>
                      <p class="fn_left ti">2.本协议项下的收、付交易等数据信息均以金梧桐生成并公布的内容为准。甲方、乙方、丙方可以登录金梧桐平台网站查阅前述数据信息。</p>
                      <p class="fn_left ti">3.协议各方负有对其他方提供的信息及本协议内容保密的义务，未经其他方同意，任何一方不得向协议主体之外的任何人披露，但法律、法规另有规定或本协议另有约定的除外。</p>
                      <p class="fn_left ti">4.本协议在金梧桐平台保留存档。各方同意：因履行本协议有争议的，以金梧桐平台所保留的协议文件版本及网站披露信息为准。</p>
                      <p class="fn_left ti">5.甲方、乙方及丙方应确保在金梧桐平台登记的邮件、手机等联系方式正确与通畅。金梧桐平台向各方登记联系方式发送的通知及信息，即视为通知送达。因操作不当或疏于查收信息，造成的损失由其自行承担。</p>
                      <p class="fn_left ti">6.协议各方应按照法律规定自行处理税收问题。</p>
                      <p class="fn_left ti">7.项目一旦发出，除募集未成功外，甲方不得撤资，同时委托金梧桐平台向支付方发出指令将资金划至乙方在支付方的资金存（托）管账户，具体划转时间以金梧桐平台发布的信息为准。</p>
                      <p class="fn_left ti">8.本协议生效后借款资金支用前，除不可抗力外，若出现其他不可归责于乙方原因导致协议不能履行的，乙方不承担违约责任，出借资金不计息返还甲方，本协议提前终止。</p>
                      <p class="fn_left ti">9.本合同为电子版合同，与纸质版合同具有同等法律效力。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第六条 法律的适用和争议的解决</span>
                      <p class="fn_left ti">1.《北京普惠通数据信息技术有限公司网站注册服务协议》、《风险揭示书》等为本协议的组成部分，与本协议具同等法律效力。若前述规则及协议与本协议不一致的，以本协议为准。</p>
                      <p class="fn_left ti">2. 协议履行中发生争议，可由各方协商解决，协商不成可向丁方所在地仲裁委员会申请仲裁。</p>
                    </li>
                    <li class="float">
                      <span class="fn_left num_list">第七条 协议生效</span>
                      <p class="fn_left ti">1.本协议签订之日起生效。</p>
                      <p class="fn_left ti">2.募集资金不成功则视为本次借款失败，本协议不生效，甲方的出借资金立即无息退回。</p>
                    </li>

                    <li>
                      <span class="fn_left ti">（本页为签署页，无正文）</span>
                      <p class="fn_left ti">签约提示</p>
                      <p class="fn_left ti">协议各方注意对本协议各项条款作全面、准确的理解。签约各方对本协议条款的含义认识一致。</p>
                    </li>
                  </ol>

                </div>
                <ul class="sss_ul float w1000 mt16">
                  <li><span class="float">出借人：</span><span class="fr">法定代表人或授权代理人：</span></li>
                  <li><span class="float">（公章或合同专用章）</span><span class="fr">（签字或盖章）</span></li>
                  <li><span class="float">     年     月      日</span><span class="fr"></span></li>
                </ul>
                <ul class="sss_ul float w1000 mt16">
                  <li><span class="float">借款人：</span><span class="fr">法定代表人或授权代理人：</span></li>
                  <li><span class="float">（公章或合同专用章）</span><span class="fr">（签字或盖章）</span></li>
                  <li><span class="float">     年     月      日</span><span class="fr"></span></li>
                </ul>
                <ul class="sss_ul float w1000 mt16">
                  <li><span class="float">网站服务人：</span><span class="fr">法定代表人或授权代理人：</span></li>
                  <li><span class="float">（公章或合同专用章）</span><span class="fr">（签字或盖章）</span></li>
                  <li><span class="float">     年     月      日</span><span class="fr"></span></li>
                </ul>
                <ul class="sss_ul float w1000 mt16">
                  <li><span class="float">网站服务人：</span><span class="fr">法定代表人或授权代理人：</span></li>
                  <li><span class="float">（公章或协议专用章）</span><span class="fr">（签字或盖章）</span></li>
                  <li><span class="float">     年     月      日</span><span class="fr"></span></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive:true,
        isTwoActive:false,
        loanList:[
          {listName:'合同模板1'},
          {listName:'合同模板2'},
        ]
      }
    },
    methods:{
      goBackOne() {
        this.$router.go(-1);
      },
      //点击tab按钮
      activeThis(item){
        if(item == "one"){
          this.isActive = true;
          this.isTwoActive = false;
        }else if (item == "two") {
          this.isActive = false;
          this.isTwoActive = true;
        }else{

        }
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "../../../assets/css/loanNo.less";
</style>
