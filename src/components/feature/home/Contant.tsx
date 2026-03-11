/* eslint-disable react/no-unescaped-entities */
'use client';
import AnimatedIcon from '@/components/common/AnimatedIcon';
import Row from '@/components/common/Row';
import TextElement from '@/components/common/TextElement';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm, Controller } from 'react-hook-form';
import { IoIosSend } from 'react-icons/io';
import { MdConnectWithoutContact } from 'react-icons/md';
import ContactInfo from './ContactInfo';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
import { useState } from 'react';

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
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: IFormData) => {
    setIsLoading(true);
    try {
      const emailData = {
        to_name: 'waqar.mernstackdev@gmail.com',
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

      toast.success('Message sent successfully', {
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setIsLoading(false);

      reset(); // Reset form fields after submission
    } catch (error) {
      console.error('Failed to send email.', error);
      toast.error('Failed to send message', {
        description: 'Something went wrong. Please try again later.',
      });
      setIsLoading(false);
    }
  };

  return (
    <Row
      id="contact"
      className="mt-4 w-full justify-center bg-white pt-3 pb-0 md:py-4"
    >
      <Row className="mb-4 w-[98%] flex-col items-center justify-between gap-4 px-2 md:w-[90%] md:px-0">
        <Row className="items-center gap-3 text-[#291c3a]">
          <Row className="flex-col items-start gap-2 md:items-center">
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
          <Row className="mb-3 w-full flex-col gap-8 rounded-md border bg-[#e1ebed] px-2 py-4 shadow-md md:mb-0 md:flex-row md:items-center md:justify-between md:gap-0 md:p-6">
            <ContactInfo />

            <Row className="w-full flex-col items-start gap-3 md:w-[60%]">
              {/* Name Input */}

              <Controller
                name="name"
                control={control}
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <div className="flex w-full flex-col">
                    <Input
                      {...field}
                      type="text"
                      className="poppinsRegular w-full bg-white p-2 text-[12px] outline-none md:text-[14px]"
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
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                }}
                render={({ field }) => (
                  <div className="flex w-full flex-col">
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                      className="poppinsRegular w-full bg-white p-2 text-[12px] outline-none md:text-[14px]"
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
                rules={{ required: 'Message is required' }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    name="message"
                    className="poppinsRegular h-38 w-full resize-none rounded-sm bg-white px-2 py-2 text-[12px] outline-none md:px-4 md:text-[14px]"
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
                size={'sm'}
                onClick={handleSubmit(onSubmit)}
                className="bg-[#8121d0] text-white hover:bg-[#8121d0c7]"
              >
                <IoIosSend className="text-white" />
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </Row>
          </Row>
        </Row>
      </Row>
    </Row>
  );
};

export default ContactSection;
