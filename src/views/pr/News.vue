<template>
	<div class='news-wrap'>
        <div class='news-container'>
            <div class='news-category'>新闻动态</div>
            <ul class='news-list'>
              <li>
                <div class='article-title'>
                  <h3 class="">九号平衡车 Plus</h3>
                  <span class="article-date">2017-05-09 23:00 发布</span>
                </div>
                <div class="article-content">
                  <img src="http://i1.mifile.cn/a4/xmad_15042542317885_XJdKI.jpg" alt="">
                  <p>Plus 延续了九号平衡车部分控制算法设计，通过内置的体重传感器、
                  角度姿态传感器、速度传感器、温度传感器、电流传感器等获取用户驾驶数据，
                  根据智能自适应算法不断地自动优化驾驶控制参数，让用户获得最佳的驾驶体验和安全性。</p>
                </div>
              </li>
              <li>
                <div class='article-title'>
                  <h3 class="">九号平衡车 Plus</h3>
                  <span class="article-date">2017-05-09 23:00 发布</span>
                </div>
                <div class="article-content">
                  <img src="http://i1.mifile.cn/a4/xmad_15042542317885_XJdKI.jpg" alt="">
                  <p>Plus 延续了九号平衡车部分控制算法设计，通过内置的体重传感器、
                  角度姿态传感器、速度传感器、温度传感器、电流传感器等获取用户驾驶数据，
                  根据智能自适应算法不断地自动优化驾驶控制参数，让用户获得最佳的驾驶体验和安全性。</p>
                </div>
              </li>
              <li>
                <div class='article-title'>
                  <h3 class="">九号平衡车 Plus</h3>
                  <span class="article-date">2017-05-09 23:00 发布</span>
                </div>
                <div class="article-content">
                  <img src="http://i1.mifile.cn/a4/xmad_15042542317885_XJdKI.jpg" alt="">
                  <p>Plus 延续了九号平衡车部分控制算法设计，通过内置的体重传感器、
                  角度姿态传感器、速度传感器、温度传感器、电流传感器等获取用户驾驶数据，
                  根据智能自适应算法不断地自动优化驾驶控制参数，让用户获得最佳的驾驶体验和安全性。</p>
                </div>
              </li>
              <li>
                <div class='article-title'>
                  <h3 class="">九号平衡车 Plus</h3>
                  <span class="article-date">2017-05-09 23:00 发布</span>
                </div>
                <div class="article-content">
                  <img src="http://i1.mifile.cn/a4/xmad_15042542317885_XJdKI.jpg" alt="">
                  <p>Plus 延续了九号平衡车部分控制算法设计，通过内置的体重传感器、
                  角度姿态传感器、速度传感器、温度传感器、电流传感器等获取用户驾驶数据，
                  根据智能自适应算法不断地自动优化驾驶控制参数，让用户获得最佳的驾驶体验和安全性。</p>
                </div>
              </li>
              <li>
                <div class='article-title'>
                  <h3 class="">九号平衡车 Plus</h3>
                  <span class="article-date">2017-05-09 23:00 发布</span>
                </div>
                <div class="article-content">
                  <img src="http://i1.mifile.cn/a4/xmad_15042542317885_XJdKI.jpg" alt="">
                  <p>Plus 延续了九号平衡车部分控制算法设计，通过内置的体重传感器、
                  角度姿态传感器、速度传感器、温度传感器、电流传感器等获取用户驾驶数据，
                  根据智能自适应算法不断地自动优化驾驶控制参数，让用户获得最佳的驾驶体验和安全性。</p>
                </div>
              </li>
            </ul>
        </div>
        <ul class="banners">
          <li class="item">
            <img src="http://static.smartisanos.cn/pr/img/news/banner-4_003f702f04.png" alt="">
          </li>
          <li class="item">
            <img src="http://static.smartisanos.cn/pr/img/news/banner-4_003f702f04.png" alt="">
          </li>
          <li class="item">
            <img src="http://static.smartisanos.cn/pr/img/news/banner-4_003f702f04.png" alt="">
          </li>
          <li class="item">
            <img src="http://static.smartisanos.cn/pr/img/news/banner-4_003f702f04.png" alt="">
          </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {},
    mounted() {
    },
    destroyed() {
    }
}
</script>

<style lang="scss" scoped>
.news-wrap {
    width: 1220px;
    height: 100%;
    overflow: hidden;    
    margin: 0 auto;
    margin-top: 40px;
    padding-bottom: 40px;
}

.news-container {
  float: left;
  width: 870px;
  background: #fff;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  .news-category {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: left;
    text-indent: 20px;
    font-size: 18px;
    font-weight: 400;
    color: #333;
    box-shadow: rgba(0,0,0,.06) 0 1px 7px;
    background: #f3f3f3;
    background: linear-gradient(#fbfbfb,#ececec);
    border-bottom: 1px solid #d4d4d4;
    border-radius: 8px 8px 0 0;
  }
  .news-list {
    padding: 30px;
    li {
      font-size: 14px;
      border-bottom: 1px solid #e6e7e8;
      margin-bottom: 30px;
      padding-bottom: 30px;
      overflow: hidden;
      .article-title {
        overflow: hidden;
        h3 {
          font-size: 22px;
          float: left;
        }
      }
      .article-date {
        font-size: 14px;
        float: right;
      }
      &:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }
    }
    .article-content {
      color: #666;
      img {
        width: 100%;
        padding: 16px 0;
      }
      p {
        line-height: 1.8;
      }
    }
  }
}

.banners {
  float: right;
  overflow: hidden;
}
</style>