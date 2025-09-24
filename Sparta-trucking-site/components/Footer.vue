<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Image wrapper with overlay content -->
      <div class="footer-image-wrapper">
        <img
          src="/images/footer.png"
          alt="Southern States Service Area Map"
          class="footer-image"
        />

        <!-- Overlay everything in the middle -->
        <div class="footer-overlay">
          <h2>Our Transportation Service Areas</h2>
          <p>
            Proudly serving customers across
            <strong>all Southern States</strong> with reliable trucking and
            freight solutions.
          </p>

          <div class="scrolling-text">
            <span>
              Serving: Alabama · Georgia · Florida · Louisiana · Mississippi ·
              North Carolina · South Carolina · Tennessee · Texas · Virginia
            </span>
          </div>

          <div class="footer-buttons">
            <a href="tel:985-517-4322" class="call-button">📞 Call: 985-517-4322</a>
            <a href="/quote" class="quote-button">💬 Get an Online Quote</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #ff9307, #b30000);
  color: white;
  padding: 2.5rem 1rem;
  text-align: center;
}

.footer-image-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 100%;
}

.footer-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

/* Center all overlay content in the middle of image */
.footer-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  padding: 1rem;
  width: 90%;
  max-width: 800px;
}

.footer-overlay h2 {
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  font-weight: 800;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}
.footer-overlay p {
  margin-bottom: 1rem;
  line-height: 1.6;
  font-weight: 500;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}

/* Scrolling text */
.scrolling-text {
  overflow: hidden;
  white-space: nowrap;
  margin: 1rem 0;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
}
.scrolling-text span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 18s linear infinite;
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Buttons */
.footer-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.call-button {
  background-color: #fdd835;
  color: black;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 700;
  transition: filter 0.2s ease;
}
.call-button:hover {
  filter: brightness(0.95);
}
.quote-button {
  background-color: #0f172a;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 700;
  transition: filter 0.2s ease;
}
.quote-button:hover {
  filter: brightness(1.2);
}
</style>
