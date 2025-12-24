import { Link } from "react-router-dom";
import "./semiProject.css";

const Semiproject = () => {
  return (
    <div className="semi-project-detail-container">
      <h1 className="semi-project-title">세미 프로젝트</h1>

      {/* 1. 대표 이미지 */}
      <section className="semi-project-section">
        <img
          className="semi-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-project.jpg`}
          alt="대표 이미지"
        />
      </section>

      {/* 2. 기술 스택 */}
      <section className="semi-project-section">
        <img
          className="semi-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-skill.jpg`}
          alt="기술 스택"
        />
      </section>

      {/* 3. 프로젝트 소개 */}
      <section className="semi-project-section">
        <img
          className="semi-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-present.jpg`}
          alt="프로젝트 소개"
        />
      </section>

      {/* 4. 주요 기능 소개 */}
      <section className="semi-project-section">
        <img
          className="semi-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-function.jpg`}
          alt="주요기능"
        />
      </section>

      {/* 5. 역할 분담 */}
      <section className="semi-project-section">
        <img
          className="semi-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-oo.jpg`}
          alt="역할 분담"
        />
      </section>

      {/* 6. 주문 기능 */}
      <section className="semi-project-section">
        <h2 className="semi-section-title">주문 기능 (담당: 전현우)</h2>

        <div className="semi-my-role">
          <h3 className="semi-role-title">담당 역할</h3>
          <p className="semi-role-desc">
            주문/장바구니 기능의 프론트엔드와 백엔드를 모두 담당했습니다.
          </p>
          <ul className="semi-tech-list">
            <li>
              <strong>프론트엔드:</strong> Thymeleaf, JavaScript, jQuery, AJAX
            </li>
            <li>
              <strong>백엔드:</strong> Spring Boot, MyBatis로 RESTful API 개발
            </li>
            <li>
              <strong>데이터베이스:</strong> Oracle SQL로 주문 데이터 관리
            </li>
            <li>
              <strong>외부 API:</strong> 네이버 지도 API, 아임포트 결제 API
            </li>
          </ul>
        </div>

        <div className="semi-challenge">
          <h3 className="semi-challenge-title">어려웠던 점과 해결 방법</h3>
          <p className="semi-challenge-desc">
            <strong>문제:</strong> 장바구니에서 여러 상품의 수량과 옵션을 동시에
            관리하면서 총 금액을 실시간으로 계산하는 것이 복잡했습니다.
            <br />
            <strong>해결:</strong> jQuery의 .each() 메서드로 모든 장바구니
            항목을 순회하면서 개별 계산 후 총합을 업데이트하는 함수를 만들어
            실시간 가격 업데이트를 구현했습니다.
          </p>
        </div>

        {/* 지도 기능 */}
        <h4 className="semi-small-title">매장 위치 지도</h4>
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-map.jpg`}
          alt="지도 기능"
        />
        <p className="semi-project-desc">
          네이버 지도 API를 사용하여 4개 매장의 위치를 마커로 표시했습니다. 마커
          클릭 시 매장 정보가 표시되며, 매장 선택 시 해당 메뉴 페이지로
          이동합니다.
        </p>

        <div className="semi-crud-box">
          <h4 className="semi-code-label">핵심 코드</h4>
          <pre className="semi-code-block">
            {`// 네이버 지도 API - 마커 생성 및 클릭 이벤트
const map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.5338151, 126.8969784),
    zoom: 17
});

const marker1 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5340956, 126.8969507),
    map: map
});

// 마커 클릭 시 매장 정보 표시
naver.maps.Event.addListener(marker1, "click", function() {
    infoWindow = new naver.maps.InfoWindow({
        content: "<div><a href='/product/productList?shopName=" 
                 + shopName + "'>" + shopName + "</a></div>"
    });
    infoWindow.open(map, marker1);
});`}
          </pre>
        </div>

        {/* 옵션 선택 */}
        <h4 className="semi-small-title">옵션 선택 기능</h4>
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-option.jpg`}
          alt="옵션 선택"
        />
        <p className="semi-project-desc">
          상품 종류(음료/디저트/굿즈)에 따라 옵션이 동적으로 표시됩니다. 샷
          추가, 휘핑 크림, 사이즈 선택 시 가격이 실시간으로 계산됩니다.
        </p>

        <div className="semi-crud-box">
          <h4 className="semi-code-label">핵심 코드</h4>
          <pre className="semi-code-block">
            {`// 수량 증가 시 가격 계산
$("#drinkBox .button-plus1").on("click", function() {
    const optionCount = $("#drinkBox .order-option-count").text();
    const shotCount = $("#drinkBox .order-option-shotcount").text();
    const creamCount = $("#drinkBox .order-option-creamcount").text();
    
    const plusCount = Number(optionCount) + 1;
    if(optionCount == 10) return;
    
    let sizeCount = selectedSize == "XL" ? 1 : 0;
    
    // 총 금액 = 기본가 + 사이즈 + 샷 + 크림
    const totalPrice = drinkBasePrice * plusCount;
    const sizeTotal = sizePrice * sizeCount * plusCount;
    const shotTotal = shotCount * shotPay * plusCount;
    const creamTotal = creamCount * creamPay * plusCount;
    const payPrice = totalPrice + sizeTotal + shotTotal + creamTotal;
    
    $("#drinkBox .order-option-totalprice").text(payPrice);
});`}
          </pre>
        </div>

        {/* 장바구니 */}
        <h4 className="semi-small-title">장바구니 기능</h4>
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-cart.jpg`}
          alt="장바구니"
        />
        <p className="semi-project-desc">
          장바구니 목록 관리, 수량 조절, 선택 삭제 기능을 구현했습니다. 멤버십
          등급에 따라 할인율이 자동 적용됩니다.
        </p>

        <div className="semi-crud-box">
          <h4 className="semi-code-label">핵심 코드</h4>
          <pre className="semi-code-block">
            {`// 장바구니 총 금액 계산
function total() {
    let totalProduct = 0;
    let totalDiscount = 0;
    let totalCount = 0;
    
    $(".cartlist").each(function() {
        let priceProduct = Number($(this).find(".price-product").text());
        let priceDiscount = Number($(this).find(".price-discount").text());
        let priceCount = Number($(this).find(".quantity").text());
        
        priceDiscount = Math.round(priceDiscount / 10) * 10;
        
        totalDiscount += priceDiscount;
        totalProduct += priceProduct;
        totalCount += priceCount;
    });
    
    let totalpay = totalProduct - totalDiscount;
    
    $(".product-totalprice").text(totalProduct);
    $(".total-discount").text(totalDiscount);
    $(".total-price").text(totalpay);
}

// Backend - 장바구니 저장
@PostMapping(value="/DrumtongCart")
@ResponseBody
public int insertCart(CartItem ct, 
    @SessionAttribute(required = false) Member member) {
    ct.setMemberNo(member.getMemberNo());
    int result = orderService.insertCart(ct);
    return result;
}`}
          </pre>
        </div>

        {/* 구매 내역 */}
        <h4 className="semi-small-title">구매 내역 조회</h4>
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-buy.jpg`}
          alt="구매 내역"
        />
        <p className="semi-project-desc">
          결제 완료 시 장바구니 데이터를 주문 테이블로 이동합니다. 트랜잭션
          처리로 데이터 일관성을 보장하며, 회원별 구매 내역을 조회할 수
          있습니다.
        </p>

        <div className="semi-crud-box">
          <h4 className="semi-code-label">핵심 코드</h4>
          <pre className="semi-code-block">
            {`// Service - 트랜잭션 처리
@Transactional
public int insertOrderTbl(OrderTbl otb) {
    // 주문 번호 생성
    int orderNo = orderDao.getorderNo();
    otb.setOrderNo(orderNo);
    
    // 주문 테이블에 저장
    int orderTbl = orderDao.insertOrderTbl(otb);
    
    // 장바구니 데이터 조회
    List<CartItem> list = orderDao.selectCartList(param);
    
    // 장바구니 → 주문 상세 테이블로 이동
    for(int i = 0; i < list.size(); i++) {
        CartItem o = list.get(i);
        DetailsTbl dtl = new DetailsTbl();
        dtl.setCupChoice(o.getCupChoice());
        dtl.setCount(o.getCount());
        dtl.setOrderNo(orderNo);
        dtl.setPay(o.getPay());
        
        int resultDt = orderDao.insertDetailsTbl(dtl);
    }
    
    // 장바구니 삭제
    int result = orderDao.deleteCart(param);
    return result;
}`}
          </pre>
        </div>
      </section>
      {/* 구매 내역 조회 섹션 다음에 추가 */}

      {/* 로그인 세션 관리 */}
      <section className="semi-project-section">
        <h2 className="semi-section-title">로그인 세션 관리</h2>

        <div className="semi-my-role">
          <h3 className="semi-role-title">세션으로 회원 정보 관리</h3>
          <p className="semi-role-desc">
            스프링의 @SessionAttribute를 사용하여 로그인한 회원 정보를
            가져옵니다. 로그인하지 않은 사용자는 자동으로 로그인 페이지로
            이동합니다.
          </p>
        </div>

        <div className="semi-crud-box">
          <h4 className="semi-code-label">핵심 코드 - Controller</h4>
          <pre className="semi-code-block">
            {`// 장바구니 페이지 - 로그인 체크
@GetMapping(value="/DrumtongCart")
public String cartPage(Model model, String shopName,
    @SessionAttribute(required = false) Member member) {
    
    // 로그인 안 했으면 로그인 페이지로 이동
    if(member == null) {
        return "redirect:/member/loginFrm";
    }
    
    // 세션에서 회원번호 가져오기
    int memberNo = member.getMemberNo();
    
    // 회원의 멤버십 등급과 할인율 조회
    VipMember vm = orderService.insertVip(memberNo);
    
    // 회원의 장바구니 목록 조회
    List list = orderService.selectCartList(memberNo, shopName);
    
    model.addAttribute("vm", vm);
    model.addAttribute("list", list);
    
    return "order/DrumtongCart";
}`}
          </pre>
        </div>

        <div className="semi-crud-box">
          <h4 className="semi-code-label">
            핵심 코드 - 멤버십 할인율 조회 SQL
          </h4>
          <pre className="semi-code-block">
            {`-- 회원의 현재 멤버십 등급과 할인율 조회
SELECT * FROM (
    SELECT 
        member_no,
        member_nickname,
        membership_grade,
        membership_level,
        percent,
        membership_recode_last
    FROM member_tbl
    LEFT JOIN membership_recode_tbl 
        ON membership_recode_nickname = member_nickname
    LEFT JOIN membership_tbl 
        ON membership_recode_member_no = membership_level
    WHERE sysdate BETWEEN membership_recode_start 
        AND membership_recode_last
        AND member_no = #{memberNo}
    ORDER BY percent DESC NULLS LAST
)
WHERE rownum = 1`}
          </pre>
        </div>

        <p className="semi-project-desc">
          로그인한 회원의 멤버십 등급(일반/실버/골드/VIP)에 따라 자동으로
          할인율이 적용됩니다. 세션에 저장된 회원 정보로 장바구니와 주문 기능을
          안전하게 처리합니다.
        </p>
      </section>

      {/* 결제 API 연동 */}
      <section className="semi-project-section">
        <h2 className="semi-section-title">결제 시스템 구현</h2>

        <div className="semi-my-role">
          <h3 className="semi-role-title">아임포트 결제 API 연동</h3>
          <p className="semi-role-desc">
            아임포트 결제 API를 사용하여 실제 테스트 결제가 가능하도록
            구현했습니다. 결제 성공 시 장바구니 데이터가 주문 테이블로 이동하며,
            트랜잭션으로 데이터 일관성을 보장합니다.
          </p>
        </div>

        <h4 className="semi-small-title">결제 흐름</h4>
        <div className="semi-challenge">
          <p className="semi-challenge-desc">
            <strong>1단계:</strong> 사용자가 구매하기 버튼 클릭
            <br />
            <strong>2단계:</strong> 아임포트 결제 창 표시 (카드 결제)
            <br />
            <strong>3단계:</strong> 결제 성공 시 서버로 결제 정보 전송
            <br />
            <strong>4단계:</strong> 장바구니 → 주문 테이블로 데이터 이동
            <br />
            <strong>5단계:</strong> 장바구니 데이터 삭제
            <br />
            <strong>6단계:</strong> 구매 내역 페이지에서 확인 가능
          </p>
        </div>

        <div className="semi-crud-box">
          <h4 className="semi-code-label">
            핵심 코드 - 결제 요청 (JavaScript)
          </h4>
          <pre className="semi-code-block">
            {`// 아임포트 결제 API 초기화
IMP.init("imp57046341");

// 결제 요청
IMP.request_pay({
    channelKey: "channel-key-d17f31e0-d991-403f-bc94-3f28deb3cce8",
    pay_method: "card",
    merchant_uid: "order_no_" + dateString, // 주문번호
    name: productName,                       // 상품명
    amount: totalprice,                      // 결제금액
    buyer_email: "DromTong@naver.com",
    buyer_name: "드럼통코리아 주식회사",
    buyer_tel: "1533-1212"
}, function (rsp) {
    if(rsp.success) {
        // 결제 성공 시 서버로 주문 저장 요청
        $.ajax({
            url: "/order/pay",
            type: "post",
            data: { shopName: shopName },
            success: function () {
                alert("구매 성공");
                location.href = "/";
            },
            error: function() {
                alert("구매 실패");
            }
        });
    } else {
        alert("구매 실패");
    }
});`}
          </pre>
        </div>

        <div className="semi-crud-box">
          <h4 className="semi-code-label">
            핵심 코드 - 주문 저장 Service (@Transactional)
          </h4>
          <pre className="semi-code-block">
            {`@Transactional
public int insertOrderTbl(OrderTbl otb) {
    // 1. 주문번호 생성
    int orderNo = orderDao.getorderNo();
    otb.setOrderNo(orderNo);
    
    int memberNo = otb.getMemberNo();
    String shopName = otb.getShopName();
    
    HashMap<String, Object> param = new HashMap<>();
    param.put("memberNo", memberNo);
    param.put("shopName", shopName);
    
    // 2. 주문 테이블에 저장
    int orderTbl = orderDao.insertOrderTbl(otb);
    
    // 3. 장바구니 데이터 조회
    List<CartItem> list = orderDao.selectCartList(param);
    
    // 4. 장바구니 → 주문 상세 테이블로 데이터 이동
    for(int i = 0; i < list.size(); i++) {
        CartItem o = list.get(i);
        DetailsTbl dtl = new DetailsTbl();
        
        // 장바구니 데이터를 주문 상세로 복사
        dtl.setCupChoice(o.getCupChoice());
        dtl.setCupSize(o.getCupSize());
        dtl.setCount(o.getCount());
        dtl.setProductNo(o.getProductNo());
        dtl.setOrderNo(orderNo);
        dtl.setPay(o.getPay());
        
        // 주문 상세 테이블에 저장
        int resultDt = orderDao.insertDetailsTbl(dtl);
    }
    
    // 5. 장바구니 데이터 삭제
    int result = orderDao.deleteCart(param);
    
    return result;
}`}
          </pre>
        </div>

        <div className="semi-challenge">
          <h3 className="semi-challenge-title">트랜잭션 처리</h3>
          <p className="semi-challenge-desc">
            <strong>문제:</strong> 결제 완료 후 장바구니 데이터를 주문 테이블로
            이동하는 과정에서 오류가 발생하면 데이터 불일치가 생길 수 있습니다.
            <br />
            <strong>해결:</strong> @Transactional을 사용하여 모든 작업이
            성공하면 커밋, 하나라도 실패하면 롤백되도록 처리했습니다. 이를 통해
            데이터 일관성을 보장합니다.
          </p>
        </div>
      </section>
      {/* GitHub 링크 */}
      <section className="semi-project-section">
        <div className="semi-github-box">
          <h3 className="semi-github-title">프로젝트 코드 보기</h3>
          <button
            onClick={() =>
              window.open(
                "https://github.com/wjsgusdn96tp-create/new_drumtong_project",
                "_blank"
              )
            }
            className="semi-github-link"
          >
            GitHub 저장소 바로가기 →
          </button>
        </div>
      </section>

      {/* 뒤로가기 */}
      <div className="semi-back-button-box">
        <Link to="/" className="semi-back-button">
          ← 메인으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default Semiproject;
