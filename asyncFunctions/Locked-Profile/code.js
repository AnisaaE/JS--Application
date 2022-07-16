async function lockedProfile() {
  const url = "http://localhost:3030/jsonstore/advanced/profiles";
  let result = await (await fetch(url)).json();
  let main = document.getElementById("main");
  Object.entries(result).forEach((x) => {
    let id = x[0];
    let info = x[1];
    let div = document.createElement("div");

    div.className = "profile";
    div.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user1Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value=${info.username} disabled readonly />
        <div class="user1Username">
            <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value=${info.email} disabled readonly />
            <label>Age:</label>
            <input type="text" name="user1Age" value=${info.age} disabled readonly />
            </div>
				
				<button>Hide it</button>`;

    main.appendChild(div);
  });

  Array.from(document.querySelectorAll("button")).forEach((x) =>
    x.addEventListener("click", more)
  );

  
  function more(e) {
    let profil = e.target.parentElement;
    let isActive =
      profil.querySelector("input[type=radio]:checked").value === "unlock";

    if (isActive) {
      let infoDiv = profil.querySelector("div");
      let buttonText = e.target;

      if (buttonText.textContent == "Show more") {
        buttonText.textContent = "Hide it";
        infoDiv.style.display = "block";
      } else {
        buttonText.textContent = "Show more";
        infoDiv.style.display = "none";
      }
    }
  }
}
