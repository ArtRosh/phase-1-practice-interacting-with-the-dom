document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let count = 0;
  
    let timer = setInterval(() => {
      count++;
      counter.innerText = count;
    }, 1000);
  
    // Кнопки увеличения и уменьшения счетчика
    document.getElementById("plus").addEventListener("click", () => {
      count++;
      counter.innerText = count;
    });
  
    document.getElementById("minus").addEventListener("click", () => {
      count--;
      counter.innerText = count;
    });
  
    // Лайки
    const likes = {};
  
    document.getElementById("heart").addEventListener("click", () => {
      if (!likes[count]) {
        likes[count] = 1;
      } else {
        likes[count]++;
      }
  
      let likesList = document.getElementById("likes");
      let existingLike = document.getElementById(`like-${count}`);
  
      if (existingLike) {
        existingLike.innerText = `${count} has been liked ${likes[count]} times`;
      } else {
        let li = document.createElement("li");
        li.id = `like-${count}`;
        li.innerText = `${count} has been liked 1 time`;
        likesList.appendChild(li);gi
      }
    });
  
    // Кнопка паузы
    document.getElementById("pause").addEventListener("click", function () {
      let isPaused = this.innerText === "resume";
  
      if (isPaused) {
        timer = setInterval(() => {
          count++;
          counter.innerText = count;
        }, 1000);
        this.innerText = "pause";
      } else {
        clearInterval(timer);
        this.innerText = "resume";
      }
  
      // Блокируем/разблокируем кнопки
      document.getElementById("plus").disabled = !isPaused;
      document.getElementById("minus").disabled = !isPaused;
      document.getElementById("heart").disabled = !isPaused;
    });
  
    // Форма комментариев
    document.getElementById("comment-form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      let commentInput = document.getElementById("comment-input");
      let commentText = commentInput.value;
  
      if (commentText.trim() !== "") {
        let commentList = document.getElementById("list");
        let commentItem = document.createElement("li");
        commentItem.innerText = commentText;
        commentList.appendChild(commentItem);
  
        commentInput.value = "";
      }
    });
  });