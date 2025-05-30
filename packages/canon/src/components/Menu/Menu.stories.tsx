/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import { Button } from '../Button';
import { Icon } from '../Icon';

const meta = {
  title: 'Components/Menu',
  component: Menu.Root,
} satisfies Meta<typeof Menu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Menu.Trigger
          render={props => (
            <Button
              {...props}
              size="medium"
              variant="secondary"
              iconEnd={<Icon name="chevron-down" />}
            >
              Menu
            </Button>
          )}
        />
        <Menu.Portal>
          <Menu.Positioner sideOffset={8} align="start">
            <Menu.Popup>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Invite new members</Menu.Item>
              <Menu.Item>Download app</Menu.Item>
              <Menu.Item>Log out</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </>
    ),
  },
};

export const Open: Story = {
  args: {
    ...Default.args,
    open: true,
  },
};

export const OpenOnHover: Story = {
  args: {
    ...Default.args,
    openOnHover: true,
  },
};
