import SignInForm from '@/src/widgets/signInForm/signInForm';
import SideImageCard from '@/src/shared/ui/sideImageCard/SideImageCard';
import PromoBanner from '@/src/widgets/promoBanner/PromoBanner';

import css from './signIn.module.scss';

const SignInPage: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.leftItems}>
        <SideImageCard />
      </div>
      <div className={css.rightItems}>
        <PromoBanner />
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
