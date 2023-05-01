import { Button, Space } from "antd";
import React, { FC, ReactNode, useCallback } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons"

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Div = styled.div``

export interface ETitleProps {
  /**
   * 业务名称
   * @default ""
   */
  affairName?: string

  /**
   * 扩展业务，ReactNode类型
   * @default <></>
   */
  extendAffair?: ReactNode
  /**
   * 点击新增按钮回调函数
   * @returns () => {}
   */
  onClickAdd?: () => void
  /**
   * 页面的标题
   * @default ""
   */
  pageTitle?: string
  /**
   * 返回按钮连接，如果没有，则不会显示返回按钮
   * @default ""
   */
  backPath?: string
  
}
export const ETitle:FC<ETitleProps> = ({
  affairName = '',
  backPath = '',
  extendAffair,
  onClickAdd = () => {},
  pageTitle = ''
}) => {

  const onBack = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    window.location.href.includes('/#/')
      ? window.location.hash = backPath
      : window.location.href = backPath
  }, [backPath])

  return (
    <SpaceBetween>
      <Div>
        {
          backPath && backPath !== ''
            ? <Button icon={<ArrowLeftOutlined />} onClick={onBack} type="link"></Button>
            : ''
        }
        {pageTitle}
      </Div>
      <Div>
        <Space>
          {extendAffair}
          <Button onClick={onClickAdd} type="primary">+ 新增{affairName}</Button>
        </Space>
      </Div>
    </SpaceBetween>
  )
}

export default ETitle;