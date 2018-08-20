<template>
<section class="contact mt-6 mb-5 text-white fonts">
  <h4 class="text-center"> Enquire about Pace of Sunshine North </h4>

  <form class="form">
    <div class="field">
      <label for="first-name">First Name * </label>
      <input class="touched" type="text" name="firstName" minlength="2" required>
    </div>

    <div class="field">
      <label for="last-name">Last Name *</label>
      <input class="touched" type="text" name="lastName" minlength="3" required>
    </div>

    <div class="field">
      <label for="email">Email *</label>
      <input class="touched" type="text" name="email" required>
    </div>

    <div class="field">
      <label for="phone">Phone *</label>
      <input class="touched" type="text" name="phone" minlength="8" required>
    </div>

    <div class="field">
      <label for="phone">Postcode *</label>
      <input class="touched" type="text" name="postcode" minlength="4" required>
    </div>

    <div class="field wide">
      <label for="referral">How did you hear about Pace Sunshine North*</label>
      <div class="select-wrap touched">
			<select type="dropdown" id="referral" name="referral" class="touched" required="">
				<option value="">Please choose one</option>
				<option value="Domain.com.au">Domain.com.au</option>
				<option value="Apartment Developments.com.au">Apartment Developments.com.au</option>
				<option value="REA">REA</option>
				<option value="Email marketing">Email marketing</option>
				<option value="Newspaper ad">Newspaper ad</option>
				<option value="Display suite">Display suite</option>
				<option value="Online article">Online article</option>
				<option value="Search engine">Search engine</option>
				<option value="Referral">Referral</option>
				<option value="Referral from real estate agent">Referral from real estate agent</option>
				<option value="Letterbox drop">Letterbox drop</option>
				<option value="Online ad">Online ad</option>
				<option value="Billboard">Billboard</option>
			</select>
		</div>
    </div>

    <button type="submit" class="submit-button">Submit </button>
  </form>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.contact .field {
  width: 100%;
  padding-top: 15px;
}

.contact .field.wide {
    width: 100%;
}

.contact label {
  display: block;
  margin-bottom: 5px;
  letter-spacing: 0.05em;
}

.contact input:focus, .contact select:focus {
    background: white;
    border: 1px solid white;
    color: #333618;
}

.contact form {
  margin: 0 20px;
  display: flex;
  max-width: 930px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.contact .select-wrap {
  position: relative;
}

.contact input, .contact select {
  width: 100%;
  border: 1px solid #52593f;
  background: #333618;
  padding: 20px;
  line-height: 1;
  color: white;
  transition: .3s ease;
}

.contact button {
  border: none;
  margin-top: 30px;
  padding: 20px 80px;
  cursor: pointer;
  width: 100%;
  letter-spacing: .02em;
  font-weight: bold;
  background: #ffb400;
  color: #3c401c;
  text-decoration: none;
  transition: .5s;
}

@media (min-width: 768px) {
  .contact form {
    margin: 0 auto;
  }

  .contact .field {
    width: 48.5%;
    padding-top: 30px;
  }

  .contact input, .contact select {
    padding: 25px;
  }

  .contact button {
    width: auto;
  }
}
</style>
