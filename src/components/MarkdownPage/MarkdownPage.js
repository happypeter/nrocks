import React from 'react';
import Container from 'components/Container';
import Flex from 'components/Flex';
import MarkdownHeader from 'components/MarkdownHeader';
import NavigationFooter from 'templates/components/NavigationFooter';
import StickyResponsiveSidebar from 'components/StickyResponsiveSidebar';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import { sharedStyles, colors } from 'theme';
import createOgUrl from 'utils/createOgUrl';
import PlayCircleIcon from 'svg/PlayCircle'
import CreateIcon from 'svg/Create'

import type { Node } from 'types';

type Props = {
  createLink: Function,
  enableScrollSync?: boolean,
  ogDescription: string,
  location: Location,
  markdownRemark: Node,
  itemList: Array<Object>,
  titlePostfix: string,
};

const getPageById = (itemList: Array<Object>, templateFile: ?string) => {
  if (!templateFile) {
    return null;
  }
  const linkId = templateFile.replace('.html', '');
  return itemList.find(item => item.id === linkId);
};

const MarkdownPage = ({
  createLink,
  enableScrollSync,
  ogDescription,
  location,
  markdownRemark,
  itemList,
  titlePostfix = '',
}: Props) => {
  const titlePrefix = markdownRemark.frontmatter.title || '';

  const prev = getPageById(itemList, markdownRemark.frontmatter.prev);
  const next = getPageById(itemList, markdownRemark.frontmatter.next);
  const videoLink = itemList.filter(item => item.title === markdownRemark.frontmatter.title)

  return (
    <Flex
      direction="column"
      grow="1"
      shrink="0"
      halign="stretch"
      css={{
        width: '100%',
        flex: '1 0 auto',
        position: 'relative',
        zIndex: 0,
      }}>
      <TitleAndMetaTags
        ogDescription={ogDescription}
        ogUrl={createOgUrl(markdownRemark.fields.slug)}
        title={`${titlePrefix}${titlePostfix}`}
      />
      <div css={{ flex: '1 0 auto' }}>
        <Container>
          <div css={sharedStyles.articleLayout.container}>
            <Flex type="article" direction="column" grow="1" halign="stretch">
              <MarkdownHeader title={titlePrefix} />

              <a href={videoLink[0].video} css={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 32,
                textDecoration: 'none',
                '& span': {
                  marginLeft: 8
                }
              }}>
                <PlayCircleIcon css={{ width: 32, fill: colors.primary }} />
                <span
                  css={{
                    lineHeight: 1.8,
                    color: colors.primary,
                    borderBottom: `1px solid ${colors.primary}`
                  }}>到 B 站观看视频</span>
              </a>
              <div css={sharedStyles.articleLayout.content}>
                <div
                  css={[sharedStyles.markdown]}
                  dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
                />

                {markdownRemark.fields.path && (
                  <div css={{ marginTop: 80 }}>
                    <a
                      css={sharedStyles.articleLayout.editLink}
                      href={`https://github.com/reactjs/reactjs.org/tree/master/${
                        markdownRemark.fields.path
                        }`}>
                      <CreateIcon css={{ width: 20, fill: colors.primary }} /> Edit this page on GitHub
                    </a>
                  </div>
                )}
              </div>
            </Flex>

            <div css={sharedStyles.articleLayout.sidebar}>
              <StickyResponsiveSidebar
                enableScrollSync={enableScrollSync}
                createLink={createLink}
                location={location}
                itemList={itemList}
              />
            </div>
          </div>
        </Container>
      </div>

      {(next || prev) && (
        <NavigationFooter location={location} next={next} prev={prev} />
      )}
    </Flex>
  );
};

export default MarkdownPage;
