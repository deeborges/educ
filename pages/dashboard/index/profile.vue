<template>
  <section class="gce__profile">
    <PersonalDataForm />
    <ContactForm />
    <AddressForm />
  </section>
</template>

<script>
import PersonalDataForm from '../../../components/profile/personalDataForm';
import ContactForm from '../../..//components/profile/contactForm';
import AddressForm from '../../../components/profile/addressForm';

export default {
  components: {
    PersonalDataForm,
    ContactForm,
    AddressForm
  }
}
</script>

<style>
.gce__profile {
  display: grid;
}
</style>