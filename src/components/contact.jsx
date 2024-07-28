const Contact
 = () => {
    return (
      <>
       <div>  
          <center>  
              <h1>تماس باما</h1>  
          </center>  
            <div className="contact">  
                {[  
                    { emoji: "📞", title: "تلفن", content: "برای تماس با ما، می‌توانید با شماره تلفن زیر تماس حاصل فرمایید:", detail: "۰۹۰۵۶۵۴۳۶۶۵ - ۰۹۹۳۱۲۳۹۲۶۱", link: "tel:09056543665" },  
                    { emoji: "📧", title: "ایمیل", content: "برای ارسال پیام به ما، می‌توانید به آدرس ایمیل زیر ایمیل بفرستید:", detail: "alirezanasiri88.3.12@gmail.com", link: "mailto:alirezanasiri88.3.12@gmail.com" },  
                    { emoji: "📫", title: "آدرس", content: "برای مراجعه حضوری به ما، آدرس ما در شهر مراغه به شرح زیر می‌باشد:", detail: "مراغه، خیابان دانشسرا، بالاتر از میدان ۲۲بهمن، خیابان قاضی طباطبایی ، مدرسه فرهنگ شهید پرکار", link: "https://nshn.ir/227bLkWUPCJatB" }  
                ].map((contact, index) => (  
                    <div className="contact-card" key={index}>  
                        <div className="emoji">{contact.emoji}</div>  
                        <h2>{contact.title}</h2>  
                        <p>{contact.content}</p>  
                        <p>{contact.detail}</p>  
                        <a href={contact.link}>{contact.title === "ایمیل" ? "ایمیل" : "تماس"}</a>  
                    </div>  
                ))}  
            </div>  
        </div>
      </>
    )
  }
  
export default Contact