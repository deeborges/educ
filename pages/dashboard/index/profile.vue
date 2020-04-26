<template>
  <section>
    <PersonalDataForm />
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

export default {
  components: {
    PersonalDataForm,
    ContactForm,
    AddressForm
  }
};
</script>

<style>
.gce__profile--pc {
  display: grid;
  gap: 20px;
  grid-auto-rows: auto;
  grid-template-columns: 2fr 2fr;
}
</style>