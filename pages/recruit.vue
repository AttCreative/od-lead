<template>
  <div class="recruit-page">
    <PageHeader title="RECRUIT" subtitle="採用情報" />

    <Breadcrumbs :items="[{ label: '採用情報' }]" />

    <div class="recruit-page-hero">
      <img
        src="/public/images/recruit/recruit.svg"
        alt="リクルート画像"
        class="recruit-page-hero-img"
      />
    </div>

    <div class="recruit-page-intro-strong">
      <div>
        ☆買取り対象エリアは神奈川県内が中心です☆<br />
        主力エリアの横浜・川崎・藤沢・逗子・茅ヶ崎を中心に区分マンションや<br />
        土地・戸建ての不動産を買取します。（全国の不動産が対象可。）<br />
        経験を活かし、これまでの営業畑から将来は経営参画・独立支援まで<br />
        ご自身の意向に合わせてキャリアアップを目指せます。
      </div>
    </div>

    <div class="recruit-info-area">
      <div class="recruit-type">営業／仕入れ担当</div>
      <Line />

      <div class="recruit-area-box">
        <div class="recruit-item">業務形態</div>
        <div class="recruit-answer">
          正社員<br />
          ※1ヶ月～3ヶ月の試用期間有り
        </div>
      </div>
      <Line />

      <div class="recruit-area-box">
        <div class="recruit-item">応募資格</div>
        <div class="recruit-answer">
          不動産未経験者：社会人経験3年以上の方。<br />
          <br />
          ※営業経験がなくてもやる気や意欲を重視しています。<br />
          <br />
          ※スキルや知識は一切不問！人柄・意欲がある方、大歓迎です。<br />
          ※前職の雇用形態は不問。フリーターの方も歓迎いたします。<br />
          ※経験業界・職種、転職回数、就業ブランクなども一切問いません。<br />
          <br />
          経験者：不動産経験3年以上<br />
          <br />
          ※契約・決済からお客様へのお引渡まで一通りの業務ができる方を想定しております。<br />
          ◎ブランクがある方もお気軽にご相談ください。
        </div>
      </div>
      <Line />

      <div class="recruit-area-box">
        <div class="recruit-item">勤務時間</div>
        <div class="recruit-answer">
          9：30～18：00（所定労働時間7時間30分／休憩60分）<br />
          <br />
          ※基本的に残業はありません。
        </div>
      </div>
      <Line />

      <div class="recruit-area-box">
        <div class="recruit-item">給与</div>
        <div class="recruit-answer">
          不動産未経験者：30万円～<br />
          <br />
          不動産　経験者：40万円～<br />
          <br />
          ※みなし残業代を含みます<br />
          <br />
          ※経験者の方は前職実績を考慮し、面談のうえ決定いたします。
        </div>
      </div>
      <Line />

      <div class="recruit-area-box">
        <div class="recruit-item">待遇</div>
        <div class="recruit-answer">
          ■各種社会保険完備（雇用・労災・健康・厚生年金）<br />
          <br />
          ■交通費支給（3万円まで）<br />
          <br />
          ■経費精算<br />
          <br />
          ■資格取得支援制度<br />
          <br />
          <br />
          ＜給与にプラスしてもらえる手当・インセンティブ＞<br />
          ■仕入れ手当<br />
          <br />
          ■早期売却手当<br />
          <br />
          ■役職手当<br />
          <br />
          ■歩合給（利益に応じて5％～28％）<br />
          <br />
          ※成果に応じて歩合率が高くなります。<br />
          <br />
          ■残業手当（固定残業代超過分）<br />
          ■資格手当<br />
          <br />
          ★賞与はありませんが、成果に応じたインセンティブ制度を採用しております。<br />
          <br />
          昇給<br />
          <br />
          年１回 <br />
          <br />
          ※業績により決定いたします。
        </div>
      </div>
      <Line />

      <div class="recruit-area-box">
        <div class="recruit-item">休日</div>
        <div class="recruit-answer">
          ＜年間休日120日＞<br />
          ■完全週休2日制（火曜・水曜 or 水曜・日曜）<br />
          ■年末年始休暇<br />
          ■夏季休暇<br />
          ■GW休暇<br />
          <br />
          ■有給休暇<br />
          ■慶弔休暇<br />
          ◎一人ひとりの個性を尊重します。ありきたりな型にはめることなく、<br />
          個々人にあわせて一緒に仕事をすすめていけるよう努めています。
        </div>
      </div>
      <Line />
      <div class="recruit-area-center">
        ぜひお気軽にご応募ください。<br />
        <br />
        株式会社リード<br />
        <br />
        横浜市中区英町1番地隆峰ビル301号
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import Line from "@/components/common/Line.vue";
import PageHeader from "@/components/common/PageHeader.vue";

usePageTitle("RECRUIT");
</script>

<style scoped lang="scss">
.recruit-page {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.recruit-page-hero {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.recruit-page-hero-img {
  width: 90%;
  height: auto;
  display: block;
}

.recruit-page-intro-strong {
  text-align: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  font-size: 24px;
  font-weight: 700;
}

.recruit-info-area {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.recruit-type {
  font-weight: 700;
  font-size: 30px;
  text-align: left;
  padding-left: 10px;
}

.recruit-area-box {
  display: flex;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  align-items: flex-start;
  padding-top: 10px;
  padding-bottom: 10px;
}
.recruit-item {
  font-weight: 700;
  width: 25%;
  text-align: center;
  font-size: 20px;
}
.recruit-answer {
  font-weight: 400;
  width: 75%;
  text-align: left;
}

.recruit-area-center {
  text-align: center;
  margin-top: 36px;
}
</style>
