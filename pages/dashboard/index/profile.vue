<template>
  <section>
    <article class="gce__profile--pc">
      <PersonalDataForm />
      <CardProfile />
    </article>
    <article class="gce__profile--pc">
      <AddressForm />
      <ContactForm />
    </article>
  </section>
</template>

<script>
import PersonalDataForm from "../../../components/profile/personalDataForm";
import ContactForm from "../../..//components/profile/contactForm";
import AddressForm from "../../../components/profile/addressForm";
import CardProfile from '../../../components/profile/cardProfile';

export default {
  components: {
    PersonalDataForm,
    ContactForm,
    AddressForm,
    CardProfile
  }
};
</script>

<style>
.gce__profile--pc {
  display: grid;
  gap: 20px;
  grid-auto-rows: auto;
  grid-template-columns: 4fr 2fr;
}
</style>