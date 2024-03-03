const mongoose = require('mongoose')
const { Service, Doctor } = require('../models')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const createData = async () => {
  let doctors = [
    [
      {
        image: '',
        name: 'Dr. Emily Smith',
        email: 'emilysmith@example.com',
        experience: 10,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '8:00',
          end: '16:00'
        }
      },
      {
        image: '',
        name: 'Dr. John Doe',
        email: 'johndoe@example.com',
        experience: 8,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png',
        name: 'Dr. Sarah Johnson',
        email: 'sarahjohnson@example.com',
        experience: 12,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '8:00',
          end: '16:00'
        }
      },
      {
        image: '',
        name: 'Dr. Michael Williams',
        email: 'michaelwilliams@example.com',
        experience: 8,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      }
    ],
    [
      {
        image: '',
        name: 'Dr. Jennifer Lee',
        email: 'jenniferlee@example.com',
        experience: 10,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. David Rodriguez',
        email: 'davidrodriguez@example.com',
        experience: 8,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Emily Chen',
        email: 'emilychen@example.com',
        experience: 12,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Mark Wilson',
        email: 'markwilson@example.com',
        experience: 12,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      }
    ],
    [
      {
        image: '',
        name: 'Dr. Sophia Johnson',
        email: 'sophiajohnson@example.com',
        experience: 15,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Rachel Martinez',
        email: 'rachelmartinez@example.com',
        experience: 12,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Amanda White',
        email: 'amandawhite@example.com',
        experience: 10,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Michelle Adams',
        email: 'michelleadams@example.com',
        experience: 8,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      }
    ],
    [
      {
        image: '',
        name: 'Dr. Michael Johnson',
        email: 'michaeljohnson@example.com',
        experience: 15,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. James Smith',
        email: 'jamessmith@example.com',
        experience: 12,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Daniel Wilson',
        email: 'danielwilson@example.com',
        experience: 10,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Robert Martinez',
        email: 'robertmartinez@example.com',
        experience: 8,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      }
    ],
    [
      {
        image: '',
        name: 'Dr. Sarah Lee',
        email: 'sarahlee@example.com',
        experience: 10,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. David Brown',
        email: 'davidbrown@example.com',
        experience: 8,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Jessica Miller',
        email: 'jessicamiller@example.com',
        experience: 12,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Kevin Davis',
        email: 'kevindavis@example.com',
        experience: 6,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      }
    ],
    [
      {
        image: '',
        name: 'Dr. Emily White',
        email: 'emilywhite@example.com',
        experience: 10,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. John Davis',
        email: 'johndavis@example.com',
        experience: 8,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Sarah Wilson',
        email: 'sarahwilson@example.com',
        experience: 12,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Michael Brown',
        email: 'michaelbrown@example.com',
        experience: 6,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      }
    ],
    [
      {
        image: '',
        name: 'Dr. Jennifer Smith',
        email: 'jennifersmith@example.com',
        experience: 10,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. David Johnson',
        email: 'davidjohnson@example.com',
        experience: 8,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Sarah Davis',
        email: 'sarahdavis@example.com',
        experience: 12,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Michael Wilson',
        email: 'michaelwilson@example.com',
        experience: 6,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      }
    ],
    [
      {
        image: '',
        name: 'Dr. Emily Wilson',
        email: 'emilywilson@example.com',
        experience: 10,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. John Brown',
        email: 'johnbrown@example.com',
        experience: 8,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Sarah Martinez',
        email: 'sarahmartinez@example.com',
        experience: 12,
        phone: '123-456-7890',
        gender: 'Female',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      },
      {
        image: '',
        name: 'Dr. Michael Johnson',
        email: 'michaeljohnson@example.com',
        experience: 6,
        phone: '123-456-7890',
        gender: 'Male',
        schedule: {
          start: '10:00',
          end: '18:00'
        }
      }
    ]
  ]

  let services = [
    {
      image: '',
      name: 'General Checkup',
      description:
        'Our general checkup is a comprehensive assessment of your overall health. It includes a physical examination, review of medical history, and basic lab tests. This service is suitable for adults of all ages who want to maintain good health and detect any potential issues early. Our experienced healthcare providers will ensure you receive personalized care and advice to keep you healthy.',
      phone: '123-456-7890',
      price: 100,
      minAge: 16,
      maxAge: null,
      gender: 'All',
      specialization: 'General Medicine',
      doctors: []
    },
    {
      image: '',
      name: 'Pediatric Care',
      description:
        'Our pediatric care services focus on the unique health needs of infants, children, and adolescents. Our team of pediatricians provides routine checkups, vaccinations, and treatment for common childhood illnesses. We also offer guidance on nutrition, growth and development, and parenting concerns. Our goal is to promote the health and well-being of your child from birth through adolescence.',
      phone: '123-456-7890',
      price: 80,
      minAge: 0,
      maxAge: 18,
      gender: 'All',
      specialization: 'Pediatrics'
    },
    {
      image: '',
      name: "Women's Health",
      description:
        "Our women's health services address a wide range of issues specific to women, including reproductive health, pregnancy, and menopause. We offer screenings for breast and cervical cancer, as well as counseling on contraception and family planning. Our compassionate healthcare providers are committed to supporting women at every stage of life with personalized care and guidance.",
      phone: '123-456-7890',
      price: 120,
      minAge: 18,
      maxAge: null,
      gender: 'Female',
      specialization: 'Obstetrics and Gynecology'
    },
    {
      image: '',
      name: "Men's Health",
      description:
        "Our men's health services focus on the unique health needs of men, including prostate health, sexual health, and testosterone levels. We offer screenings for conditions such as prostate cancer and erectile dysfunction, as well as counseling on lifestyle factors that affect men's health. Our healthcare providers are dedicated to helping men maintain optimal health and well-being.",
      phone: '123-456-7890',
      price: 120,
      minAge: 18,
      maxAge: null,
      gender: 'Male',
      specialization: 'Urology'
    },
    {
      image: '',
      name: 'Dental Care',
      description:
        'Our dental care services encompass a wide range of preventive, restorative, and cosmetic treatments to maintain and improve your oral health. Our experienced dentists provide routine checkups, cleanings, fillings, and more advanced procedures such as crowns and bridges. We are committed to helping you achieve a healthy and beautiful smile.',
      phone: '123-456-7890',
      price: 150,
      minAge: 5,
      maxAge: null,
      gender: 'All',
      specialization: 'Dentistry'
    },
    {
      image: '',
      name: 'Dermatology',
      description:
        'Our dermatology services focus on the diagnosis and treatment of skin, hair, and nail conditions. We offer a range of services including acne treatment, mole removal, and skin cancer screenings. Our board-certified dermatologists provide personalized care using the latest techniques and technologies to help you achieve healthy skin.',
      phone: '123-456-7890',
      price: 200,
      minAge: 10,
      maxAge: null,
      gender: 'All',
      specialization: 'Dermatology'
    },
    {
      image: '',
      name: 'Cardiology',
      description:
        'Our cardiology services provide comprehensive care for patients with heart conditions. We offer diagnostic tests such as ECG, echocardiogram, and stress tests, as well as treatments including medication, lifestyle counseling, and cardiac rehabilitation. Our team of cardiologists is committed to helping you maintain a healthy heart and prevent heart disease.',
      phone: '123-456-7890',
      price: 250,
      minAge: 18,
      maxAge: null,
      gender: 'All',
      specialization: 'Cardiology'
    },
    {
      image: '',
      name: 'Orthopedics',
      description:
        'Our orthopedic services focus on the diagnosis and treatment of musculoskeletal disorders. We offer a range of services including joint replacement, sports medicine, and fracture care. Our team of orthopedic surgeons and specialists provide personalized care to help you regain mobility and live an active life.',
      phone: '123-456-7890',
      price: 180,
      minAge: 10,
      maxAge: null,
      gender: 'All',
      specialization: 'Orthopedics'
    },
    {
      image: '',
      name: 'Mental Health Counseling',
      description:
        'Our mental health counseling services provide support and treatment for a range of mental health issues. We offer individual and group therapy, as well as medication management for conditions such as depression, anxiety, and PTSD. Our licensed counselors are dedicated to helping',
      phone: '123-456-7890',
      price: 150,
      minAge: 12,
      maxAge: null,
      gender: 'All',
      specialization: 'Psychiatry'
    },
    {
      image: '',
      name: 'Physical Therapy',
      description:
        'Our physical therapy services focus on rehabilitation and recovery from physical injuries and conditions. We offer personalized treatment plans including exercises, manual therapy, and modalities such as ultrasound and electrical stimulation. Our goal is to help you regain strength, mobility, and function to return to your daily activities.',
      phone: '123-456-7890',
      price: 180,
      minAge: 5,
      maxAge: null,
      gender: 'All',
      specialization: 'Physical Therapy'
    },
    {
      image: '',
      name: 'Occupational Therapy',
      description:
        'Our occupational therapy services help individuals with physical, developmental, or emotional disabilities regain independence in their daily lives. We offer personalized therapy plans including activities to improve motor skills, cognitive function, and self-care abilities. Our occupational therapists are dedicated to helping you achieve your maximum potential and quality of life.',
      phone: '123-456-7890',
      price: 200,
      minAge: 5,
      maxAge: null,
      gender: 'All',
      specialization: 'Occupational Therapy'
    },
    {
      image: '',
      name: 'Allergy Testing',
      description:
        'Our allergy testing services help identify allergens that may be causing your symptoms. We offer skin prick tests and blood tests to diagnose allergies to foods, pollen, pet dander, and other common allergens. Our goal is to help you manage your allergies and improve your quality of life.',
      phone: '123-456-7890',
      price: 120,
      minAge: 5,
      maxAge: null,
      gender: 'All',
      specialization: 'Allergology'
    },
    {
      image: '',
      name: 'Radiology',
      description:
        'Our radiology services provide diagnostic imaging using advanced technologies such as X-rays, CT scans, and MRIs. We offer a range of imaging services to help diagnose and monitor various conditions including fractures, tumors, and internal injuries. Our team of radiologists is committed to providing accurate and timely results to assist in your treatment.',
      phone: '123-456-7890',
      price: 300,
      minAge: 16,
      maxAge: null,
      gender: 'All',
      specialization: 'Radiology'
    },
    {
      image: '',
      name: 'Diabetes Management',
      description:
        'Our diabetes management services provide comprehensive care for patients with diabetes. We offer education on self-management, insulin therapy, and monitoring of blood glucose levels. Our team of healthcare providers is dedicated to helping you manage your diabetes and prevent complications.',
      phone: '123-456-7890',
      price: 150,
      minAge: 18,
      maxAge: null,
      gender: 'All',
      specialization: 'Endocrinology'
    },
    {
      image: '',
      name: 'Nutrition Counseling',
      description:
        'Our nutrition counseling services provide personalized advice on diet and nutrition to help you achieve your health goals. Whether you are looking to lose weight, manage a medical condition, or improve your overall health, our registered dietitians can help you develop a plan that fits your lifestyle and preferences.',
      phone: '123-456-7890',
      price: 100,
      minAge: 5,
      maxAge: null,
      gender: 'All',
      specialization: 'Nutrition'
    },
    {
      image: '',
      name: 'Sleep Disorder Clinic',
      description:
        'Our sleep disorder clinic offers diagnostic and treatment services for a range of sleep disorders including sleep apnea, insomnia, and narcolepsy. We provide overnight sleep studies and personalized treatment plans to help you achieve restful and refreshing sleep. Our team of specialists is committed to improving your sleep quality and overall health.',
      phone: '123-456-7890',
      price: 200,
      minAge: 18,
      maxAge: null,
      gender: 'All',
      specialization: 'Sleep Medicine'
    },
    {
      image: '',
      name: 'Weight Management Program',
      description:
        'Our weight management program provides comprehensive support for individuals looking to achieve and maintain a healthy weight. We offer personalized plans including diet and exercise recommendations, behavior modification strategies, and medical interventions when necessary. Our team of healthcare providers is dedicated to helping you reach your weight loss goals and improve your overall health.',
      phone: '123-456-7890',
      price: 150,
      minAge: 18,
      maxAge: null,
      gender: 'All',
      specialization: 'Nutrition and Weight Management'
    },
    {
      image: '',
      name: 'Cancer Screening',
      description:
        'Our cancer screening services provide early detection and prevention of various types of cancer. We offer screenings for breast, cervical, colorectal, and prostate cancer, as well as genetic counseling for individuals at high risk. Our goal is to detect cancer at an early stage when treatment is most effective.',
      phone: '123-456-7890',
      price: 200,
      minAge: 18,
      maxAge: null,
      gender: 'All',
      specialization: 'Oncology'
    },
    {
      image: '',
      name: 'Asthma Clinic',
      description:
        'Our asthma clinic offers comprehensive care for individuals with asthma. We provide diagnostic tests, personalized treatment plans, and education on managing asthma symptoms and triggers. Our team of specialists is committed to helping you achieve optimal asthma control and improve your quality of life.',
      phone: '123-456-7890',
      price: 150,
      minAge: 5,
      maxAge: null,
      gender: 'All',
      specialization: 'Pulmonology'
    },
    {
      image: '',
      name: 'Gastroenterology',
      description: `Our gastroenterology services focus on the diagnosis and treatment of digestive system disorders. We offer a range of services including endoscopy, colonoscopy, and treatment for conditions such as GERD, IBS, and Crohn's disease. Our team of gastroenterologists is dedicated to providing compassionate care to help you achieve digestive health.`,
      phone: '123-456-7890',
      price: 250,
      minAge: 18,
      maxAge: null,
      gender: 'All',
      specialization: 'Gastroenterology'
    }
  ]

  await Doctor.deleteMany({})
  await Service.deleteMany({})
  console.log('Creating data . . .')
  for (let i = 0; i < doctors.length; i++) {
    const addedDcotors = await Doctor.insertMany(doctors[i])
    const addedService = await Service.insertMany(services[i])

    addedDcotors.forEach(async (addedDoctor) => {
      addedService[0].doctors.push(addedDoctor)
      addedDoctor.service = addedService[0]
      await addedDoctor.save()
    })

    await addedService[0].save()
  }

  console.log('Data created!')
  mongoose.connection.close()
}

createData()
