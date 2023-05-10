import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React, { FC, ReactNode, useCallback } from 'react';
import styled, { CSSProperties } from 'styled-components';

const TitleContainer = styled.div`
  background-color: @primary-color;
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const titleStyle = {
  background: '#fff',
  padding: 15,
};

const Div = styled.div``;

export interface ETitleProps {
  /**
   * 是否开启动画
   * @default true
   */
  animation?: boolean;
  /**
   * 业务名称
   * @default ""
   */
  affairName?: string;

  /**
   * 页面描述
   * @default <></>
   */
  decription?: ReactNode;

  /**
   * 扩展业务，ReactNode类型
   * @default <></>
   */
  extendAffair?: ReactNode;
  /**
   * 点击新增按钮回调函数
   * @returns () => {}
   */
  onClickAdd?: () => void;
  /**
   * 页面的标题
   * @default ""
   */
  pageTitle?: string;
  /**
   * 返回按钮连接，如果没有，则不会显示返回按钮
   * @default ""
   */
  backPath?: string;
  /**
   * 标题容器类名
   */
  titleContainerClass?: string;
  /**
   * 标题容器样式
   */
  titleContainerStyle?: CSSProperties;
}
export const ETitle: FC<ETitleProps> = ({
  affairName = '',
  backPath = '',
  decription,
  extendAffair,
  onClickAdd,
  pageTitle = '',
  titleContainerStyle,
  titleContainerClass,
}) => {
  const onBack = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    window.location.href.includes('/#/')
      ? (window.location.hash = backPath)
      : (window.location.href = backPath);
  }, [backPath]);

  return (
    <TitleContainer
      className={titleContainerClass}
      style={{ ...titleStyle, ...titleContainerStyle }}
    >
      <SpaceBetween>
        <Space>
          {backPath && backPath !== '' ? (
            <Button
              icon={<ArrowLeftOutlined />}
              onClick={onBack}
              type="link"
            ></Button>
          ) : (
            ''
          )}
          {pageTitle}
          {decription}
        </Space>
        <Div>
          <Space>
            {extendAffair}
            {onClickAdd ? (
              <Button onClick={onClickAdd} type="primary">
                + 新增{affairName}
              </Button>
            ) : (
              ''
            )}
          </Space>
        </Div>
      </SpaceBetween>
    </TitleContainer>
  );
};

export default ETitle;
