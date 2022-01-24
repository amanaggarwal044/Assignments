var content = [
  {
    thumbnail:
      "https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/smb-filter1-training-card1.original.png",
    type: "VIDEO LESSON",
    level: "Beginner",
    title: "Set up an online business",
  },
  {
    thumbnail:
      "https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/smb-filter1-training-card2.original.png",
    type: "2-MIN TUTORIAL",
    level: "Beginner",
    title: "How do I get my business listed on Google Search and Maps?",
  },
  {
    thumbnail:
      "https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/smb-filter1-training-card4.original.png",
    type: "VIRTUAL WORKSHOP",
    level: "Intermediate",
    title: "Part 2: Make your website work for you",
  }
      ,

  {
    thumbnail:
      "https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/smb-filter1-training-card5.original.png",
    type: "VIRTUAL WORKSHOP",
    level: "Advanced",
    title: "Test my site to optimize your website",
  }
];


var allCheckBox=document.querySelectorAll(".filter_section input:checked");
console.log(allCheckBox);
if(allCheckBox.length==0)
{
    const contentHtml = content.map((item,index)=>
    {
        return `
        <div class="filter_content_card flex-c">
<img class="thumbnail" src="${item.thumbnail}" alt="">

<div class="flex-r">
<p class="type">${item.type}</p>
<p class="level"><span class="active_content_level"></span><span></span><span></span>&nbsp;&nbsp;&nbsp;${item.level}</p>
</div>

<p class="title">${item.title}</p>
<button>Start Now<span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></button>
  </div>`
    });

document.querySelector(".filter_content").insertAdjacentHTML("afterbegin",`${contentHtml.join("")}`);    

}














