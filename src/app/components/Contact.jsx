'use client';
import styles from '../style'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Contact = () => {
   const [isSubmitting, setIsSubmitting] = useState(false)
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsSubmitting(true)
  
      const formData = new FormData(e.target)
  
      try {
        const response = await fetch("/contact.php", {
          method: "POST",
          body: formData,
        })
  
        const result = await response.json()
  
        if (result.success) {
          toast.success("تم إرسال الرسالة بنجاح ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
          e.target.reset()
        } else {
          toast.error(result.message || "حدث خطأ أثناء الإرسال ❌", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        }
      } catch (error) {
        toast.error("فشل الاتصال بالسيرفر ❌", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      } finally {
        setIsSubmitting(false)
      }
    }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
      <section id='contact' className={`${styles.padding} min-h-[100vh] bg-dark2 flex items-center`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-10 flex-col lg:flex-row justify-between items-center">
            <div dir="rtl" className="flex lg:hidden text-white text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-center lg:text-start">
               خلنا نكتشف سوااا كيف مشروعك يقدر يترك أثـــر ..
               ويشد الإنتباه
              </h1>
            </div>
  

            <div className="w-full lg:flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8">
                <form dir="rtl" onSubmit={handleSubmit} className="flex flex-col gap-6">

                <div className="w-full flex flex-col gap-5 items-start text-right">
                  <div className="w-full lg:max-w-[460px]">
                    <label className="block text-white/80 text-sm mb-1">الاسم</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full bg-transparent text-white text-right placeholder-white/30 border-b border-white/25 py-2 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder=""
                    />
                  </div>

                  <div className="w-full lg:max-w-[460px]">
                    <label className="block text-white/80 text-sm mb-1">الإيميل</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-transparent text-white text-right placeholder-white/30 border-b border-white/25 py-2 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder=""
                    />
                  </div>

                  <div className="w-full lg:max-w-[460px]">
                    <label className="block text-white/80 text-sm mb-1">رقم الهاتف</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full bg-transparent text-white text-right placeholder-white/30 border-b border-white/25 py-2 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder=""
                    />
                  </div>

                  <div className="w-full lg:max-w-[460px]">
                    <label className="block text-white/80 text-sm mb-1">وصف موجز للمشروع</label>
                    <textarea
                      name="message"
                      rows={3}
                      className="w-full bg-transparent text-white text-right placeholder-white/30 border-b border-white/25 py-2 focus:outline-none focus:border-white/50 transition-colors resize-none"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="w-full flex items-center justify-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 cursor-pointer rounded-full border border-white/30 text-white/90 hover:text-white hover:border-white/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        جاري الإرسال...
                      </>
                    ) : (
                      'إرسال'
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div dir="rtl" className="flex-1 hidden lg:flex text-white text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl  leading-tight">
               خلنا نكتشف سوااا كيف مشروعك يقدر يترك أثـــر ..
               ويشد الإنتباه
              </h1>
            </div>
          </div>
        </div>
      </section>
  
</>

)}
export default Contact