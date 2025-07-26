import * as icon from '@mdi/js';
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: icon.mdiViewDashboardOutline,
    label: 'Dashboard',
  },

  {
    href: '/users/users-list',
    label: 'Users',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiAccountGroup ?? icon.mdiTable,
    permissions: 'READ_USERS'
  },
  {
    href: '/courses/courses-list',
    label: 'Courses',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiBookOpenPageVariant' in icon ? icon['mdiBookOpenPageVariant' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_COURSES'
  },
  {
    href: '/enrollments/enrollments-list',
    label: 'Enrollments',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiClipboardListOutline' in icon ? icon['mdiClipboardListOutline' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_ENROLLMENTS'
  },
  {
    href: '/students/students-list',
    label: 'Students',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiSchool' in icon ? icon['mdiSchool' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_STUDENTS'
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: icon.mdiAccountCircle,
  },

 {
    href: '/api-docs',
    target: '_blank',
    label: 'Swagger API',
    icon: icon.mdiFileCode,
    permissions: 'READ_API_DOCS'
  },
]

export default menuAside
