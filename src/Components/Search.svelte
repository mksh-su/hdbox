<form action="" class="form-search">
  <input type="text" placeholder="Search" class="form-search-input" />
  <input type="submit" class="form-search-btn" value="Search" />
</form>

<style lang="scss">
  .form-search {
    position: relative;
    width: 280px;
    &-input {
      padding: 10px 18px;
      border: 1px solid #dbdbdb;
      border-radius: 12px;
      width: 100%;
    }
    &-btn {
      font-size: 0;
      padding: 0;
      width: 14px;
      height: 14px;
      display: inline-block;
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      background-color: transparent;
      background-image: url(/img/help/search.svg);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      border: 0;
    }
  }
</style>
