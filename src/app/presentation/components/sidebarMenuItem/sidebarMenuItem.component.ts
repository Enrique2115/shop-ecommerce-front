import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-item',
  standalone: true,
  imports: [RouterModule],
  template: `
    <ul class="space-y-2 font-medium">
      <li>
        <a
          [routerLink]="path"
          routerLinkActive="bg-gray-800"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <i class="{{ icon }} text-2xl mr-4 text-indigo-400"></i>
          <div class="flex flex-col flex-grow">
            <span class="text-white text-lg font-semibold">{{ title }}</span>
            <span class="text-gray-400 text-sm">{{ description }}</span>
          </div>
        </a>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuItemComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) path!: string;
}
