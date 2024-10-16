<template>
    <div class="navbar">
        <p>Navbar</p>
    </div>
    <div class="main-content">
        <div class="portada-content">
            <p>Portada</p>
        </div>
        <div class="speakers-content">
            <p>Speakers</p>
        </div>
        <div class="enterprise-content">
            <p>Empresas</p>
        </div>
    </div>
    <div class="footer">
        <p>Footer</p>
    </div>
</template>
<script>

export default {
  data() {
    return {
      navbarOptions: [
        { text: "Home", link: "/", class: "btn-home" },
        { text: "About", link: "/about", class: "btn-about" },
        { text: "Contact", link: "/contact", class: "btn-contact" }
      ]
    };
  },
  methods: {
    mounted(){
        console.log(this.navbarOptions);
    }
  }
}

</script>
<style>
</style>