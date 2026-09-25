import {
  User,
  Bell,
  Palette,
  Shield,
  ChevronRight,
} from "lucide-react";

function Settings() {
  return (
    <main className="flex-1 flex flex-col bg-gray-50">
      <header className="px-6 py-5 bg-white border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your account and application preferences.
        </p>
      </header>

      <div className="p-6 max-w-4xl w-full">
        <div className="flex flex-col gap-6">

          <SettingsSection
            title="Account"
            description="Manage your personal information"
          >
            <SettingsItem
              icon={User}
              title="Profile"
              description="Change your name, avatar and personal information"
            />

            <SettingsItem
              icon={Shield}
              title="Security"
              description="Password and account security settings"
            />
          </SettingsSection>

          <SettingsSection
            title="Preferences"
            description="Customize your application experience"
          >
            <SettingsItem
              icon={Bell}
              title="Notifications"
              description="Manage notification preferences"
            />

            <SettingsItem
              icon={Palette}
              title="Appearance"
              description="Customize the appearance of the application"
            />
          </SettingsSection>

        </div>
      </div>
    </main>
  );
}

function SettingsSection({
  title,
  description,
  children,
}) {
  return (
    <section>
      <div className="mb-3">
        <h2 className="text-lg font-semibold text-gray-900">
          {title}
        </h2>

        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>

      <div className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        overflow-hidden
      ">
        {children}
      </div>
    </section>
  );
}

function SettingsItem({
  icon: Icon,
  title,
  description,
}) {
  return (
    <button
      className="
        w-full
        flex
        items-center
        gap-4
        p-5
        text-left
        border-b
        border-gray-100
        last:border-b-0
        hover:bg-gray-50
        transition
      "
    >
      <div className="
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-xl
        bg-indigo-50
        text-indigo-600
        shrink-0
      ">
        <Icon size={20} />
      </div>

      <div className="flex-1">
        <h3 className="font-medium text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>

      <ChevronRight
        size={20}
        className="text-gray-400"
      />
    </button>
  );
}

export default Settings;