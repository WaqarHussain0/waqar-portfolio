"use client";
import AnimatedIcon from "@/components/common/AnimatedIcon";
import Row from "@/components/common/Row";
import TextElement from "@/components/common/TextElement";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import ContactInfo from "./ContactInfo";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { useState } from "react";

interface IFormData {
  email: string;
  name: string;
  message: string;
}

interface IContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<IContactSectionProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: IFormData) => {
    setIsLoading(true);
    try {
      const emailData = {
        to_name: "waqar.mernstackdev@gmail.com",
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        emailData,
        process.env.NEXT_PUBLIC_USER_ID as string,
      );

      toast.success("Message sent successfully", {
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setIsLoading(false);

      reset(); // Reset form fields after submission
    } catch (error) {
      console.error("Failed to send email.", error);
      toast.error("Failed to send message", {
        description: "Something went wrong. Please try again later.",
      });
      setIsLoading(false);
    }
  };

  return (
    <Row
      id="contact"
      className=" w-full justify-center mt-4 pt-3 pb-0 md:py-4 bg-white"
    >
      <Row className="mb-4 px-2 md:px-0 w-[98%] md:w-[90%] flex-col justify-between items-center  gap-4 ">
        <Row className=" items-center gap-3 text-[#291c3a]">
          <Row className="flex-col gap-2 items-start md:items-center">
            <Row className="gap-2">
              <AnimatedIcon Icon={MdConnectWithoutContact} />
              <TextElement as="h2">Contact</TextElement>
            </Row>

            <TextElement as="p">
              Let's discuss on something cool together
            </TextElement>
          </Row>
        </Row>

        <Row className="w-full flex-col justify-between">
          <Row className="flex-col gap-8 md:gap-0 md:flex-row md:justify-between md:items-center shadow-md border rounded-md w-full  mb-3 md:mb-0 bg-[#e1ebed] px-2 py-4 md:p-6">
            <ContactInfo />

            <Row className="w-full md:w-[60%] flex-col gap-3  items-start ">
              {/* Name Input */}

              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <div className="w-full flex flex-col">
                    <Input
                      {...field}
                      type="text"
                      className="w-full outline-none p-2  poppinsRegular text-[12px] md:text-[14px] bg-white"
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <TextElement as="span" className="text-red-400">
                        {errors.name.message}
                      </TextElement>
                    )}
                  </div>
                )}
              />

              {/* Email Input */}
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                }}
                render={({ field }) => (
                  <div className="w-full flex flex-col">
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                      className="w-full outline-none p-2  poppinsRegular text-[12px] md:text-[14px] bg-white"
                    />
                    {errors.email && (
                      <TextElement as="span" className="text-red-400">
                        {errors.email.message}
                      </TextElement>
                    )}
                  </div>
                )}
              />

              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    name="message"
                    className="bg-white w-full outline-none h-38 px-2 md:px-4 py-2 rounded-sm resize-none poppinsRegular text-[12px] md:text-[14px]"
                    placeholder="Enter your message here"
                  />
                )}
              />
              {errors.message && (
                <TextElement as="span" className="text-red-400">
                  {errors.message.message}
                </TextElement>
              )}

              <Button
                disabled={isLoading}
                onClick={handleSubmit(onSubmit)}
                className="bg-[#8121d0] hover:bg-[#8121d0c7] text-white"
              >
                <IoIosSend className="text-white" />
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </Row>
          </Row>
        </Row>
      </Row>
    </Row>
  );
};

export default ContactSection;
