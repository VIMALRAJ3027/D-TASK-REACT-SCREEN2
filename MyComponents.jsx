import { FunctionComponent } from 'react';
import styles from './MyComponents.module.css'; // Ensure the CSS module is imported correctly
import GroupImage1 from '../Assets/Images/Group 1597883318.png';
import GroupImage2 from '../Assets/Images/Group 1597883322.png';

const VideoCall = () => {
  return (
    <div className={styles.videoCall}>
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="Profile" src={GroupImage1} />
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupContainer}>
                <div className={styles.groupContainer}>
                  <div className={styles.groupContainer}>
                    <div className={styles.groupContainer}>
                      <div className={styles.groupContainer}>
                        <div className={styles.groupContainer}>
                          <b className={styles.alisonKFenn}>Alison K Fenn</b>
                          <div className={styles.isOnCall}>is on Call</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.videoCallInner}>
        <div className={styles.minParent}>
          <div className={styles.minParent}>
            <div className={styles.minParent}>
              <div className={styles.min}>1.29 Min</div>
              <div className={styles.left}>Left</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.videoCallChild} alt="Call Status" src={GroupImage2} />
    </div>
  );
};

export default VideoCall;
